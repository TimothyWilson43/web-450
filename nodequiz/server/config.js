let config = {};

// web configs
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.encryption_key = 's3cret';

// database configs - dev
config.database = {};
config.database.username = 'admin';
config.database.password = 'admin';
config.database.port = '1234';
config.database.url = 'database.url';
config.database.name = 'database.name';


module.exports = config;
