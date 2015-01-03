var config,
    url = require('url'),
    path = require('path');

function getDatabase() {
  var db_config = {},
      mysql_host = process.env['DB_PORT_3306_TCP_ADDR'] || process.env['DB_1_PORT_3306_TCP_ADDR'];
  if (mysql_host) {
    db_config['client'] = 'mysql';
    db_config['connection'] = {
      host: mysql_host,
      port: '3306'
    };
  } else if (process.env['DB_CLIENT']) {
    db_config['client'] = process.env['DB_CLIENT'];
    db_config['connection'] = {
      host: process.env['DB_HOST'] || 'localhost',
      port: process.env['DB_PORT'] || '3306'
    };
  } else {
    return {
      client: 'sqlite3',
      connection: {
	filename: path.join(__dirname, '/content/data/ghost.db')
      },
      debug: false
    };
  }
  if (process.env['DB_USER']) db_config['connection']['user'] = process.env['DB_USER'];
  if (process.env['DB_PASSWORD']) db_config['connection']['password'] = process.env['DB_PASSWORD'];
  if (process.env['DB_DATABASE']) db_config['connection']['database'] = process.env['DB_DATABASE'];
  return db_config;
}

function getMailConfig() {
  var mail_config = {}
  if (process.env.MAIL_HOST)    { mail_config['host']      = process.env.MAIL_HOST }
  if (process.env.MAIL_SERVICE) { mail_config['service']   = process.env.MAIL_SERVICE }
  if (process.env.MAIL_USER) { mail_config['auth']['user'] = process.env.MAIL_USER }
  if (process.env.MAIL_PASS) { mail_config['auth']['pass'] = process.env.MAIL_PASS }
  return mail_config;
}
if (!process.env.URL) {
  console.log("Please set URL environment variable to your blog's URL");
  process.exit(1);
}

config = {
  production: {
    url: process.env.URL,
    database: getDatabase(),
    mail: getMailConfig(),
    server: {
      host: '0.0.0.0',
      port: '2368'
    }
  }
};
module.exports = config;
