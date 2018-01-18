import mockjs from 'mockjs';

export default {
  getTrace(req, res) {
    res.json(mockjs.mock(
      {
        data: {
          queryBasicTraces: {
            'traces|10': [{
              operationName: '@url',
              duration: '@natural(100, 1000)',
              start: '@datetime',
              'isError|1': true,
              traceId: '@guid',
            }],
            total: '@natural(5, 50)',
          },
        },
      }
    ));
  },
  getSpans(req, res) {
    res.json(mockjs.mock(
      {
        data: {
          queryTrace: {
            spans: [
              {
                spanId: 1,
                startTime: 1516151345000,
                applicationCode: 'xx',
                endTime: 1516151355000,
                operationName: '/user/tt',
                'type|1': ['Local', 'Entry', 'Exit'],
                'component|1': ['MySQL', 'H2', 'Spring'],
                peer: '@ip',
                'tags|1-5': [{ key: 'db.type', value: 'aa' }],
                'logs|2-10': [{ 'time|+1': 1516151345000, 'data|3-8': [{ key: 'db.type', value: 'aa' }] }],
              },
              {
                spanId: 2,
                parentSpanId: 1,
                applicationCode: 'yy',
                startTime: 1516151348000,
                endTime: 1516151351000,
                operationName: '/sql/qq',
                'type|1': ['Local', 'Entry', 'Exit'],
                'component|1': ['MySQL', 'H2', 'Spring'],
                peer: '@ip',
                'tags|1-5': [{ key: 'db.type', value: 'aa' }],
              },
            ],
          },
        },
      }
    ));
  },
};
