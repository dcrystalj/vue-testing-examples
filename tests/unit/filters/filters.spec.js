import { uppercase } from '@/filters/filters';

describe('filters.js', () => {
  it('uppercase', () => {
    expect(uppercase('abc')).toBe('ABC');
  });
});
