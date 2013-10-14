# vagrant-wp-theme-template

This is a [Vagrant](http://www.vagrantup.com/) configuration template designed for the agile development of WordPress themes.

A SCSS and CoffeeScript version of [_s](http://underscores.me/) is included for your convienience.

## Overview

* Debug mode is enabled by default
* Automatic installation & activation of plugins
    * default plugins: theme-check, plugin-check, mp6
* Optional import of theme unit test data
* Pre-installed [wp-cli](http://wp-cli.org)
* Uses [Grunt](http://gruntjs.com/) to manage your theme.

## Getting Started

1. Install [NodeJS / NPM](http://nodejs.org/download/).
2. Install [VirtualBox](https://www.virtualbox.org/).
3. Install [Vagrant](http://www.vagrantup.com/).
4. Install the vagrant-hostsupdater plugin.

    ```
    $ vagrant plugin install vagrant-hostsupdater
    ```

5. Clone the repository into a local directory.

    ```
    $ git clone https://github.com/keichan34/vagrant-wp-theme-template.git new-project
    ```

6. Change into a new directory.

    ```
    $ cd new-project
    ```

7. Start the Vagrant environment.

    ```
    $ vagrant up
    ```

8. Visit [http://wordpress.dev/](http://wordpress.dev/) !

## Development

### Watch for changed sources

This command will automatically compile your SCSS / CoffeeScript when the file is saved.

```
$ grunt watch
```

### Compile & package

(TODO) This command will package your theme into a `zip` file, ready to send off to theme review!

```
$ grunt theme-package
```

## WordPress Environment

This tool installs a WordPress environment with these settings by default.

* Default user
	* Username: admin
	* Password: admin
* Debug mode is enabled
* Default plugins
	* hotfix
	* theme-check
	* plugin-check
	* wp-multibyte-patch (`ja` locale only)

## About wp-cli

* [wp-cli](http://wp-cli.org/) is pre-installed in this Vagrant environments.
* If you install wp-cli in your Host OS, you can fire wp-cli commands from the Host OS.

### Example for wp-cli commands

You have to install [wp-cli](wp-cli.org) in your Host OS.

    cd vagrant-local

    # Exports the database using mysqldump to Desktop.
    wp db export ~/Desktop/export.sql

    # Export content to a WXR file.
    mkdir /Users/foo/Desktop/export
    wp export --dir=/Users/foo/Desktop/export

    # Activate the contect-form-7 plugin.
    wp plugin install contact-form-7 --activate

    # Update WordPress.
    wp core update


## Virtual Environment

* Allowed ports on iptables
	* 22 - SSH
	* 80 - HTTP
	* 443 - HTTPS
	* 3306 - MySQL (allows you to operate wp-cli from the Host OS)
* CentOS 6.4.x
	* PHP 5.3.x
	* MySQL 5.1.x
	* Apache 2.2.x

## Feedback

Let me know if you have any feedback! Open a new issue if you want to share your tips or report a bug.

* https://github.com/keichan34/vagrant-wp-theme-template/issues

## Contibutors

* [@miya0001](http://twitter.com/miya0001) for the initial idea and [vagrant-chef-centos-wordpress](https://github.com/miya0001/vagrant-chef-centos-wordpress)
* [@naokomc](http://twitter.com/naokomc)
* [@keichan34](http://github.com/keichan34)
