const {
  suspectsArray,
  roomsArray,
  weaponsArray,
  pickMystery,
  revealMystery,
  selectRandom
} = require('./../src/clue');

describe('Array "suspectsArray', () => {
  it('should be an array', () => {
    expect(suspectsArray instanceof Array).toBeTruthy();
  });

  it('should have 6 suspects', () => {
    expect(suspectsArray).toHaveLength(6);
  });

  describe('Suspect Objects', () => {
    beforeAll(() => {
      expect(suspectsArray.length).toBeTruthy();
    });

    it('should have a string in property "firstName"', () => {
      for (let suspect of suspectsArray)
        expect(typeof suspect.firstName).toBe('string');
    });

    it('should have a string in property "lastName"', () => {
      for (let suspect of suspectsArray)
        expect(typeof suspect.lastName).toBe('string');
    });

    it('should have a string in property "occupation"', () => {
      for (let suspect of suspectsArray)
        expect(typeof suspect.occupation).toBe('string');
    });

    it('should have a number in property "age"', () => {
      for (let suspect of suspectsArray)
        expect(typeof suspect.age).toBe('number');
    });

    it('should have a string in property "description"', () => {
      for (let suspect of suspectsArray)
        expect(typeof suspect.description).toBe('string');
    });

    it('should have a string in property "image"', () => {
      for (let suspect of suspectsArray)
        expect(typeof suspect.image).toBe('string');
    });

    it('should have a string in property "color"', () => {
      for (let suspect of suspectsArray)
        expect(typeof suspect.color).toBe('string');
    });
  });
});

describe('Array "weaponsArray', () => {
  it('should be an array', () => {
    expect(weaponsArray instanceof Array).toBeTruthy();
  });

  it('should have 9 suspects', () => {
    expect(weaponsArray).toHaveLength(9);
  });

  describe('Weapon Objects', () => {
    beforeAll(() => {
      expect(weaponsArray.length).toBeTruthy();
    });

    it('should have a string in property "name"', () => {
      for (let weapon of weaponsArray)
        expect(typeof weapon.name).toBe('string');
    });

    it('should have a number in property "weight"', () => {
      for (let weapon of weaponsArray)
        expect(typeof weapon.weight).toBe('number');
    });
  });
});

describe('Array "roomsArray', () => {
  it('should be an array', () => {
    expect(roomsArray instanceof Array).toBeTruthy();
  });

  it('should have 15 rooms', () => {
    expect(roomsArray).toHaveLength(15);
  });

  describe('Room Objects', () => {
    beforeAll(() => {
      expect(roomsArray.length).toBeTruthy();
    });

    it('should have a string in property "name"', () => {
      for (let room of roomsArray) expect(typeof room.name).toBe('string');
    });
  });
});

describe('Function "selectRandom" - Find a random element of the array', () => {
  it('should be declared', () => {
    expect(typeof selectRandom).toBe('function');
  });

  it("should return undefined if the array is empty", () => {
    expect(selectRandom([])).toBe(undefined);
  });

  it("should return the element of a single value array", () => {
    expect(selectRandom(["ab"])).toBe("ab");
  });

  it('should return an element of the array', () => {
    const array = ['ab', 'zz', 'zx', 'zy'];
    expect(array.includes(selectRandom(array))).toBeTruthy();
  });

  it('should return a random element of the array', () => {
    const mathRandomSpy = jest.spyOn(global.Math, 'random');

    mathRandomSpy.mockReturnValue(0.5);

    expect(
      selectRandom(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])
    ).toEqual('aab');

    mathRandomSpy.mockReturnValue(0.1);
    expect(
      selectRandom(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])
    ).toEqual('a');

    mathRandomSpy.mockReturnValue(0.9);
    expect(
      selectRandom(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])
    ).toEqual('kas');
  });
});

describe('Function "pickMystery" - Pick a random mystery', () => {
  it('should be declared', () => {
    expect(typeof pickMystery).toBe('function');
  });

  it('should return an object', () => {
    const mistery = pickMystery();

    expect(typeof mistery).toEqual('object');
    expect(mistery !== null).toBeTruthy();
  });

  it('should return an object with 3 properties: `suspect`, `weapon`, `room`', () => {
    const mistery = pickMystery();

    expect(Object.keys(mistery)).toHaveLength(3);
    expect(mistery).toHaveProperty('suspect');
    expect(mistery).toHaveProperty('weapon');
    expect(mistery).toHaveProperty('room');
  });

  it('should return a suspect in the suspect property of the object', () => {
    const mistery = pickMystery();
    expect(suspectsArray.includes(mistery.suspect)).toBeTruthy();
  });

  it('should return a weapon in the weapon property of the object', () => {
    const mistery = pickMystery();
    expect(weaponsArray.includes(mistery.weapon)).toBeTruthy();
  });

  it('should return a room in the room property of the object', () => {
    const mistery = pickMystery();
    expect(roomsArray.includes(mistery.room)).toBeTruthy();
  });
});

describe('Function "revealMystery" - Reveal the mystery', () => {
  it('should define revealMystery', () => {
    expect(typeof revealMystery).toBe('function');
  });

  it('should return a string', () => {
    const message = revealMystery({
      suspect: { firstName: 'aa', lastName: 'abc' },
      weapon: { name: 'abd' },
      room: { name: 'abb' }
    });
    expect(typeof message).toEqual('string');
  });

  it('should return "<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!"', () => {
    const message = revealMystery({
      suspect: { firstName: 'Victor', lastName: 'Plum' },
      weapon: { name: 'poison' },
      room: { name: 'Billiard Room' }
    });
    expect(message).toEqual(
      'Victor Plum killed Mr. Boddy using the poison in the Billiard Room!'
    );
  });
});
