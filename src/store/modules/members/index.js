import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      members: [
        {
          code: 'MEM-00001',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2000-01-01',
          gender: 'M',
          profilePicture: 'www.blibli.com/picture/member.jpg',
          addresses: [
            {
              code: 'ADD-00001',
              label: 'Rumah',
              address:
                'Gedung sarana jaya jl. Budi Kemuliaan I no. 1, RT.2/RW.3, Gambir, Central Jakarta City, Jakarta 10110',
              province: 'DKI JAKARTA',
              city: 'JAKARTA PUSAT',
            },
            {
              code: 'ADD-00002',
              label: 'Rumah 2',
              address:
                'jl. Budi Kemuliaan I no. 2, RT.2/RW.3, Gambir, Central Jakarta City, Jakarta 10110',
              province: 'DKI JAKARTA',
              city: 'JAKARTA PUSAT',
            },
          ],
        },
        {
          code: 'MEM-00002',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2000-01-01',
          gender: 'M',
          profilePicture: 'www.blibli.com/picture/member.jpg',
        },
        {
          code: 'MEM-00003',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2000-01-01',
          gender: 'M',
          profilePicture: 'www.blibli.com/picture/member.jpg',
        },
        {
          code: 'MEM-00004',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2000-01-01',
          gender: 'M',
          profilePicture: 'www.blibli.com/picture/member.jpg',
        },
        {
          code: 'MEM-00005',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2000-01-01',
          gender: 'M',
          profilePicture: 'www.blibli.com/picture/member.jpg',
        },
        {
          code: 'MEM-00006',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2000-01-01',
          gender: 'M',
          profilePicture: 'www.blibli.com/picture/member.jpg',
        },
        {
          code: 'MEM-00007',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2000-01-01',
          gender: 'M',
          profilePicture: 'www.blibli.com/picture/member.jpg',
        },
        {
          code: 'MEM-00008',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2000-01-01',
          gender: 'M',
          profilePicture: 'www.blibli.com/picture/member.jpg',
        },
        {
          code: 'MEM-00009',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2000-01-01',
          gender: 'M',
          profilePicture: 'www.blibli.com/picture/member.jpg',
        },
        {
          code: 'MEM-00010',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2000-01-01',
          gender: 'M',
          profilePicture: 'www.blibli.com/picture/member.jpg',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
