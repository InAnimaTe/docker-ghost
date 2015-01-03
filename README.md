ghost docker image
==================

A Docker image for running Ghost.

Base configuration
------------------

Change the following environment variabeles to your need:

* *NODE_ENV*: defaults to "production"
* *URL*: base url of ghost, defaults to "http://localhost:2368"

Database configuration
----------------------

Use the following environment variabeles to configure the database:

* *DB_CLIENT*: database client (eg. "mysql")
* *DB_HOST*: database hostname
* *DB_PORT*: database portnumber
* *DB_DATABASE*: database name
* *DB_USER*: database user
* *DB_PASSWORD*: database password

When a mysql/mariadb container is linked at port 3306 with alias "db" the DB_CLIENT, DB_HOST and DB_PORT variabeles 
are automatically configured.

When none of the variabeles are set ghost will use the default sqlite databasefile.

Mail configuration
------------------

Use the following environment variabeles to configure mail:

* *MAIL_HOST*
* *MAIL_SERVICE*
* *MAIL_USER*
* *MAIL_PASS*

Volumes
-------

The following volumes should be mounted if you want to have persistant data over multiple containers:

* /ghost/content/images
* /ghost/content/data (when you are using sqlite)

Credits
-------

The Docker image is inspired by the following projects:

* https://github.com/dockerfile/ghost
* https://github.com/discordianfish/docker-ghost
