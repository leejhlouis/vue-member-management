import { createStore } from 'vuex';
import members from './modules/members';
import addresses from './modules/addresses';
import regions from './modules/regions';

export default createStore({
  modules: {
    members,
    addresses,
    regions,
  },
});
