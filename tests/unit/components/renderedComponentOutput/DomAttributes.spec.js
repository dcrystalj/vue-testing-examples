import { shallowMount } from '@vue/test-utils';
import DomAttributes from '@/components/renderedComponentOutput/DomAttributes';

describe('DomAttributes.vue', () => {
  it('has rendered correct link', () => {
    const url = 'http://www.bitstamp.net/';
    const urlText = 'Super link';

    const wrapper = shallowMount(DomAttributes, {
      propsData: {
        url,
        urlText,
      },
    });

    const superLink = wrapper.find('.attributes').find('a');

    expect(superLink.attributes().href).toBe(url);
    expect(superLink.text()).toBe(urlText);
  });
});
