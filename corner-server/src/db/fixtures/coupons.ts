{
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ObjectId = require('mongodb').ObjectId;

  module.exports = [
    {
      _id: new ObjectId(),
      value: 'BEIK02LR',
      discount: '10%',
      start: '2023-04-10',
      end: '2023-05-10',
    },
    {
      _id: new ObjectId(),
      value: '55452V9I',
      discount: '10%',
      start: '2023-03-10',
      end: '2023-04-10',
    },
    {
      _id: new ObjectId(),
      value: 'L2AQCIC6',
      discount: '15%',
      start: '2023-04-15',
      end: '2023-05-15',
    },
    {
      _id: new ObjectId(),
      value: '9B5YR598',
      discount: '20%',
      start: '2023-05-12',
      end: '2023-06-12',
    },
    {
      _id: new ObjectId(),
      value: 'F4A9YRAG',
      discount: '20%',
      start: '2023-04-22',
      end: '2023-06-11',
    },
  ];
}
