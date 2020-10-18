import App from '@/App.vue'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils';

// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('TodoList', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('É uma vue instance', () => {
      const wrapper = mount(App, {
        localVue,
        vuetify
      })
      expect(wrapper.vm).toBeTruthy()
  })
})
