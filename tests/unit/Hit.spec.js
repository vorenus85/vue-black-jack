import { shallowMount } from '@vue/test-utils';
import Hit from '@/components/Hit.vue';

describe('Hit button component', () => {
  it('emits "hit" event on button click', async () => {
    const wrapper = shallowMount(Hit);
    await wrapper.find('.hit-btn').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().hit).toBeTruthy();
  });
});
