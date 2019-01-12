import { shallowMount } from '@vue/test-utils';
import Timer from '@/components/mocks/Timer';
import { advanceTo } from 'jest-date-mock';

describe('Timer.vue', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('renders correct date', () => {
    advanceTo(new Date(Date.UTC(2019, 0, 1, 0, 0, 1)));

    const wrapper = shallowMount(Timer);

    expect(wrapper.find('div').text()).toBe('"2019-01-01T00:00:01.000Z"');

    jest.advanceTimersByTime(1000);

    expect(wrapper.find('div').text()).toBe('"2019-01-01T00:00:02.000Z"');
  });
});
