import { shallowMount } from '@vue/test-utils';
import Stand from '@/components/Stand.vue';

describe('Stand button component', () => {
  it('emits "stand" event on button click', async () => {
    const wrapper = shallowMount(Stand);
    await wrapper.find('.stand-btn').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().stand).toBeTruthy();
  });
});
