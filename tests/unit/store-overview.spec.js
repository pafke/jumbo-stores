import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex);

import StoresOverview from '@/components/StoresOverview.vue';

describe('Should mount component', () => {
  let actions;
  let store;
  beforeEach(() => {
    actions = {
      loadData: jest.fn(),
    }
    store = new Vuex.Store({
      actions
    })
  });
  test('is a Vue instance', async () => {
    const wrapper = mount(StoresOverview, {
      propsData: {
        show: "",
        cities: ["Amsterdam", "Veghel"],
        stores: [
          { uuid: 123, addressName: "Store 1" },
          { uuid: 456, addressName: "Store 2" },
        ]
      },
      store,
      localVue
    });
    expect(wrapper.vm).toBeTruthy();
  });
});