import Stoned from '../stoned';
import Daemon from '../daemon';
import Magician from '../magician';

test('Герой без дурмана', () => {
  const stoned = new Stoned('Вова');
  const result = {
    name: 'Вова', level: 1, health: 100, _stoned: false,
  };
  expect(stoned).toEqual(result);
});

test('Атака мага 2 клетки без дурмана', () => {
  const magician = new Magician('Вова');
  magician.stoned = false;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(9);
});

test('Атака мага 2 клетки с дурманом', () => {
  const magician = new Magician('Вова');
  magician.stoned = true;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(4);
});

test('Атака демона 6 клетки без дурмана', () => {
  const daemon = new Daemon('Вова');
  daemon.stoned = false;
  daemon.distance = 6;
  const result = daemon.attack;
  expect(result).toBe(0);
});
