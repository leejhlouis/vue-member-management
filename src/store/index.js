import { createStore } from 'vuex';
import members from './modules/members';
import regions from './modules/regions';

export default createStore({
  modules: {
    members,
    regions,
  },
});
