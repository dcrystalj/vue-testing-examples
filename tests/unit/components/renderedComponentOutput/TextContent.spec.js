import { shallowMount } from '@vue/test-utils';
import TextContent from '@/components/renderedComponentOutput/TextContent';

describe('TextContent.vue', () => {
  it('renders correct text', () => {
    // This is example of bad test because no output is tested against any input
    const wrapper = shallowMount(TextContent);
    expect(wrapper.text()).toContain('text component');
  });
});
