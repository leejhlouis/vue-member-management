import image from "@/api-mock/helpers/image-assets";

export default [
  {
    method: 'GET',
    url: '/backend/member/MEM-00001',
    response: {
      data: [
        {
          code: 'MEM-00001',
          name: 'John Doe',
          email: 'john.doe@gdn-commerce.com',
          phone: '0123456789',
          dob: '2021-01-01',
          gender: 'M',
          profilePicture: image,
        },
      ],
    },
  },
];
