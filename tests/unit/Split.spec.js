import { shallowMount } from '@vue/test-utils';
import Split from '@/components/Split.vue';

describe('Split button component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Split);
  });

  it('emits "split" event on button click', async () => {
    await wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().split).toBeTruthy();
  });

  it('displays "Split" text on the button', () => {
    const buttonText = 'Split';
    expect(wrapper.find('button').text()).toMatch(buttonText);
  });
});
