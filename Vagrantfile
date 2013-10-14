# encoding: utf-8
# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

GUEST_IP = '192.168.33.10'

# Configuration for the WordPress install

wp_opts = {
  # The hostname that you can access this instance via
  :hostname => 'wordpress.dev',
  # Default plugins that will be installed and activated
  :default_plugins => %w(theme-check plugin-check mp6),
  # The locale WordPress will be installed in
  :locale => '',
  # The name of the theme
  :theme_name => '_s',

  :admin_user => 'wordpress',
  :admin_password => 'wordpress'
}

# end configuration

# Validate configuration

raise ArgumentError.new('wp_opts[:hostname] is required.') unless wp_opts[:hostname]

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "centos64_minimal_x86_64"
  config.vm.box_url = "http://developer.nrel.gov/downloads/vagrant-boxes/CentOS-6.4-x86_64-v20130731.box"

  config.vm.hostname = wp_opts[:hostname]
  config.vm.network :private_network, ip: GUEST_IP

  config.vm.synced_folder 'theme/', "/var/www/wordpress/wp-content/themes/#{ wp_opts[:theme_name] }", owner: 'vagrant', group: 'vagrant'

  # for CentOS ipv6 issue
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--natdnsproxy1", "off"]
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "off"]
  end

  config.vm.provision :chef_solo do |chef|

    chef.cookbooks_path = ["cookbooks", "site-cookbooks"]

    chef.json = {
      :apache => {
        :docroot_dir  => '/var/www/wordpress',
        :user         => 'vagrant',
        :group        => 'vagrant',
        :listen_ports => ["80", "443"]
      },
      :php => {
        :packages => %w(php php-cli php-devel php-mbstring php-gd php-xml php-mysql)
      },
      :mysql => {
        :bind_address           => "0.0.0.0",
        :server_debian_password => "wordpress",
        :server_root_password   => "wordpress",
        :server_repl_password   => "wordpress"
      },
      :"wp-install" => {
        :wp_version      => 'latest',
        :url             => "http://#{wp_opts[:hostname]}/",
        :wpdir           => '/var/www/wordpress/',
        :locale          => wp_opts[:locale] || 'en_US',
        :admin_user      => wp_opts[:admin_user] || 'wordpress',
        :admin_password  => wp_opts[:admin_password] || 'wordpress',
        :dbprefix        => 'wp_',
        :default_plugins => wp_opts[:default_plugins] || [],
        :default_theme   => wp_opts[:theme_name] || '',
        :title           => 'Just Another WordPress Blog',
        :is_multisite    => false,
        :force_ssl_admin => false,
        :debug_mode      => true,
        :theme_unit_test => wp_opts[:theme_unit_test] || false,
        :always_reset    => false,
        :dbhost          => GUEST_IP
      }
    }

    chef.add_recipe "yum::epel"
    chef.add_recipe "iptables"
    chef.add_recipe "apache2"
    chef.add_recipe "apache2::mod_php5"
    chef.add_recipe "apache2::mod_ssl"
    chef.add_recipe "mysql::server"
    chef.add_recipe "mysql::ruby"
    chef.add_recipe "php::package"
    chef.add_recipe "wp-cli"
    chef.add_recipe "wp-install"

  end

end
