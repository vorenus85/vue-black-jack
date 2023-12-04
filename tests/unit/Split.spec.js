import { shallowMount } from '@vue/test-utils';
import Split from '@/components/Split.vue';

describe('Split button component', () => {
  it('emits "split" event on button click', async () => {
    const wrapper = shallowMount(Split);
    await wrapper.find('.split-btn').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().split).toBeTruthy();
  });
});
