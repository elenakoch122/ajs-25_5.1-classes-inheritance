import Character from '../Character';

test('error if name is not a string', () => {
  expect(() => new Character(45, 'Bowman')).toThrowError('Имя должно включать буквы, количество символов в имени должно быть от 2 до 10');
});

test('error if name is less than two symbols', () => {
  expect(() => new Character('I', 'Bowman')).toThrowError('Имя должно включать буквы, количество символов в имени должно быть от 2 до 10');
});

test('error if name is more than ten symbols', () => {
  expect(() => new Character('Opportunity', 'Bowman')).toThrowError('Имя должно включать буквы, количество символов в имени должно быть от 2 до 10');
});

test('error if the specified character type does not exist', () => {
  expect(() => new Character('Man', 'Elf')).toThrowError('Типа персонажа Elf не существует');
});

test('creating an object with a type Zombie', () => {
  const result = new Character('Man', 'Zombie');
  const expected = {
    name: 'Man',
    type: 'Zombie',
    health: 100,
    level: 1,
  };
  expect(result).toEqual(expected);
});
