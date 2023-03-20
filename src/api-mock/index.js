import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import members from './modules/members';
import addresses from './modules/addresses';
import regions from './modules/regions';

const methodsMap = {
  GET: 'onGet',
  POST: 'onPost',
  PUT: 'onPut',
  DELETE: 'onAny',
};

const delayResponse = 500;
const mock = new MockAdapter(axios, { delayResponse });

const routes = [...members, ...addresses, ...regions];

routes.forEach((route) => {
  mock[methodsMap[route.method]](route.url).reply(200, route.response);
});
