import { createStore } from 'vuex';
import members from './modules/members';

export default createStore({
  modules: {
    members,
  },
});
