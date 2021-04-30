const path = require('path');

const migrations = {
  directory: path.join(__dirname, 'migrations'),
};

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'gorushkin',
      password: '1235',
      database: 'node',
    },
    useNullAsDefault: true,
    migrations,
  },
};
