import { shallowMount } from '@vue/test-utils';
import Double from '@/components/Double.vue';

describe('Double button component', () => {
  it('emits "double" event on button click', async () => {
    const wrapper = shallowMount(Double);
    await wrapper.find('.double-btn').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().double).toBeTruthy();
  });
});
