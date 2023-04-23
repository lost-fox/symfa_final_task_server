const Fixtures = require('node-mongodb-fixtures');
const db = 'mongodb://127.0.0.1:27017/corner';

const mongoOpts = {};

const fixtures = new Fixtures({
  dir: 'src/db/fixtures',
  filter: '.*',
});

fixtures
  .connect(db, mongoOpts)
  .then(() => fixtures.unload())
  .then(() => fixtures.load())
  .catch(console.error)
  .finally(() => fixtures.disconnect());
