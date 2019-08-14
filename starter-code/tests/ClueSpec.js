/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe('Find a random element of the array - randomSelector', function () {
  it('Defines randomSelector', function () {
    expect(typeof randomSelector).toBe('function');
  });

  it('Return undefined if the array is empty', function () {
    expect(randomSelector([])).toBe(undefined);
  });

  it('Return undefined if the array is empty', function () {
    expect(randomSelector([])).toBe(undefined);
  });

  it('Return the element of a single value array', function () {
    expect(randomSelector(['ab'])).toBe('ab');
  });

  it('Should return an element of the array', function () {
    var array = ['ab', 'zz', 'zx', 'zy'];

    expect(array.indexOf(randomSelector(array))).toBeGreaterThan(-1);
  });

  it('Return a random element of the array', function () {
    var spy = spyOn(Math, 'random').and.returnValue(0.5);

    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('aab');
    spy.and.returnValue(0.1);

    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('a');
    spy.and.returnValue(0.9);

    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('kas');
  });
});

describe('Pick a random mystery - pickMystery', function () {
  it('Defines pickMystery', function () {
    expect(typeof pickMystery).toBe('function');
  });

  it('Return an array', function () {
    expect(typeof pickMystery()).toEqual('object');
  });

  it('Return a non empty array', function () {
    expect(pickMystery().length).toBeGreaterThan(0);
  });

  it('Return an array with 3 elements', function () {
    expect(pickMystery().length).toEqual(3);
  });

  it('Return a killer on the first index of the array', function () {
    expect(charactersArray.indexOf(pickMystery()[0])).toBeGreaterThan(-1);
  });

  it('Return a weapon on the second index of the array', function () {
    expect(weaponsArray.indexOf(pickMystery()[1])).toBeGreaterThan(-1);
  });

  it('Return a room in the third index of the array', function () {
    expect(roomsArray.indexOf(pickMystery()[2])).toBeGreaterThan(-1);
  });
});

describe('Reveal the mystery - revealMystery', function () {
  it('Defines revealMystery', function () {
    expect(typeof revealMystery).toBe('function');
  });

  it('Return an array', function () {
    expect(typeof revealMystery([{ first_name: 'aa', last_name: 'abc' }, { name: 'abd' }, { name: 'abb' }])).toEqual('string');
  });

  it('Return <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!', function () {
    expect(revealMystery([{ first_name: 'Victor', last_name: 'Plum' }, { name: 'poison' }, { name: 'Billiard Room' }])).toEqual('Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!');
  });
});
