/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe('Find a random element of the array - selectRandom', () => {
  it('should define selectRandom', () => {
    expect(typeof selectRandom).toBe('function');
  });

  it('should return undefined if the array is empty', () => {
    expect(selectRandom([])).toBe(undefined);
  });

  it('should return the element of a single value array', () => {
    expect(selectRandom(['ab'])).toBe('ab');
  });

  it('should return an element of the array', () => {
    const array = ['ab', 'zz', 'zx', 'zy'];
    expect(array.indexOf(selectRandom(array))).toBeGreaterThan(-1);
  });

  it('should return a random element of the array', () => {
    const spy = spyOn(Math, 'random');

    spy.and.returnValue(0.5);
    expect(selectRandom(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('aab');

    spy.and.returnValue(0.1);
    expect(selectRandom(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('a');

    spy.and.returnValue(0.9);
    expect(selectRandom(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('kas');
  });
});

describe('Pick a random mystery - pickMystery', () => {
  it('should define pickMystery', () => {
    expect(typeof pickMystery).toBe('function');
  });

  it('should return an object', () => {
    expect(Object.prototype.toString.call(pickMystery())).toEqual('[object Object]');
  });

  it('should return an object with 3 properties', () => {
    expect(Object.keys(pickMystery()).length).toEqual(3);
  });

  it('should return a suspect in the suspect property of the object', () => {
    let suspect = JSON.stringify(pickMystery().suspect);
    expect(suspectsArray.findIndex(el => JSON.stringify(el) === suspect)).toBeGreaterThan(-1);
  });

  it('should return a weapon in the weapon property of the object', () => {
    let weapon = JSON.stringify(pickMystery().weapon);
    expect(weaponsArray.findIndex(el => JSON.stringify(el) === weapon)).toBeGreaterThan(-1);
  });

  it('should return a room in the room property of the object', () => {
    let room = JSON.stringify(pickMystery().room);
    expect(roomsArray.findIndex(el => JSON.stringify(el) === room)).toBeGreaterThan(-1);
  });
});

describe('Reveal the mystery - revealMystery', () => {
  it('should define revealMystery', () => {
    expect(typeof revealMystery).toBe('function');
  });

  it('should return a string', () => {
    expect(
      typeof revealMystery({
        suspect: { firstName: 'aa', lastName: 'abc' },
        weapon: { name: 'abd' },
        room: { name: 'abb' }
      })
    ).toEqual('string');
  });

  it('should return "<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!"', () => {
    expect(
      revealMystery({
        suspect: { firstName: 'Victor', lastName: 'Plum' },
        weapon: { name: 'poison' },
        room: { name: 'Billiard Room' }
      })
    ).toEqual('Victor Plum killed Mr. Boddy using the poison in the Billiard Room!');
  });
});
