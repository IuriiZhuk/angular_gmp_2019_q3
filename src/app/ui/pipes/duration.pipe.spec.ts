import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct  formated string', () => {

    expect(pipe.transform(58)).toBe('58 mm');
    expect(pipe.transform(61)).toBe('1 h 1 mm');
  });
});
