import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BaseContainer from './components/ui/BaseContainer.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseIcon from './components/ui/BaseIcon.vue';
import BaseDropdown from './components/ui/BaseDropdown.vue';
import BaseModal from './components/ui/modals/BaseModal.vue';
import AlertModal from './components/ui/modals/alerts/AlertModal.vue';
import DeleteAlertModal from './components/ui/modals/alerts/DeleteAlertModal.vue';
import SuccessAlertModal from './components/ui/modals/alerts/SuccessAlertModal.vue';
import BaseForm from './components/ui/BaseForm.vue';
import BaseInput from './components/ui/inputs/BaseInput.vue';
import TextFieldInput from './components/ui/inputs/TextFieldInput.vue';
import AutocompleteInput from './components/ui/inputs/AutocompleteInput.vue';
import OptionsInput from './components/ui/inputs/OptionsInput.vue';
import TextAreaInput from './components/ui/inputs/TextAreaInput.vue';

import './api-mock/index';

import './assets/base.css';

const app = createApp(App);

app.component('BaseContainer', BaseContainer);
app.component('BaseButton', BaseButton);
app.component('BaseIcon', BaseIcon);
app.component('BaseDropdown', BaseDropdown);
app.component('BaseModal', BaseModal);
app.component('AlertModal', AlertModal);
app.component('DeleteAlertModal', DeleteAlertModal);
app.component('SuccessAlertModal', SuccessAlertModal);
app.component('BaseForm', BaseForm);
app.component('BaseInput', BaseInput);
app.component('TextFieldInput', TextFieldInput);
app.component('AutocompleteInput', AutocompleteInput);
app.component('OptionsInput', OptionsInput);
app.component('TextAreaInput', TextAreaInput);

app.use(router);
app.use(store);

app.mount('#app');
