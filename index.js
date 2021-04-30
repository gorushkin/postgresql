console.log('start');

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'gorushkin',
  password: '1235',
  host: 'localhost',
  port: 5432,
  database: 'node_hero',
});

pool.connect((err, client, done) => {
  if (err) throw err;
  client.query('SELECT $1::varchar AS my_first_query', ['node hero'], function (err, result) {
    done();
    if (err) {
      return console.error('error happened during query', err);
    }
    console.log(result.rows[0]);
    process.exit(0);
  });
});



module.exports = pool;
