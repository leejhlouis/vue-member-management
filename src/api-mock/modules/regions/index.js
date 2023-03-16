export default [
  {
    method: 'GET',
    url: '/backend/region',
    response: {
      data: [
        {
          code: 'REG-00001',
          type: 'PROVINCE',
          label: 'DKI JAKARTA',
          parentCode: '',
        },
        {
          code: 'REG-00002',
          type: 'PROVINCE',
          label: 'JAWA BARAT',
          parentCode: '',
        },
        {
          code: 'REG-00003',
          type: 'CITY',
          label: 'JAKARTA BARAT',
          parentCode: 'REG-00001',
        },
        {
          code: 'REG-00004',
          type: 'CITY',
          label: 'JAKARTA TIMUR',
          parentCode: 'REG-00001',
        },
        {
          code: 'REG-00005',
          type: 'CITY',
          label: 'JAKARTA SELATAN',
          parentCode: 'REG-00001',
        },
        {
          code: 'REG-00006',
          type: 'CITY',
          label: 'BANDUNG',
          parentCode: 'REG-00002',
        },
        {
          code: 'REG-00007',
          type: 'CITY',
          label: 'JAKARTA PUSAT',
          parentCode: 'REG-00001',
        },
        {
          code: 'REG-00008',
          type: 'CITY',
          label: 'UNKNOWN CITY',
          parentCode: 'REG-00001',
        },
      ],
    },
  },
];
