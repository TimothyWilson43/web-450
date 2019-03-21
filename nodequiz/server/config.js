let config = {};

// web configs
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.encryption_key = 's3cret';

// database configs - dev
config.database = {};
config.database.username = 'wilsonxchevy';
config.database.password = 'NodeQuiz1';
config.database.url = 'ds117846.mlab.com'
config.database.port = '17846'
config.database.name = 'nodequiz'


module.exports = config;
