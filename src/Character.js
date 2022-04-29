export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно включать буквы, количество символов в имени должно быть от 2 до 10');
    }

    const characterTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!characterTypes.includes(type)) {
      throw new Error(`Типа персонажа ${type} не существует`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
