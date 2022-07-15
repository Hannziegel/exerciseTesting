import { Calculator } from './calculator.js'

describe('Add method ', () =>{
  test('1 - add 1 + 1 be equal to 2', () => {
    expect(Calculator.add(1, 1)).toBe(2);
  });

  test('2 - add 1 + 2 be equal to 3 ', () => {
    expect(Calculator.add(1,2)).toBe(3);
  });

  test('3 - add 11 + 9 be equal to 20 ', () => {
    expect(Calculator.add(11,9)).toBe(20);
  });
});

describe('Subtract method ', () =>{
  test('1 - Subtract 1 from 1 be equal to 0', () => {
    expect(Calculator.subtract(1,1)).toBe(0);
  });

  test('2 - Subtract 1 from 2 be equal to -1 ', () => {
    expect(Calculator.subtract(2, 1)).toBe(1);
  });

  test('3 - Subtract 2 from 1 be equal to 1 ', () => {
    expect(Calculator.subtract(1, 2)).toBe(-1);
  });
});

describe('Divide method ', () =>{
  test('1 - Divide 1 from 1 be equal to 0', () => {
    expect(Calculator.divide(1,1)).toBe(1);
  });

  test('2 - Divide 1 from 2 be equal to 2', () => {
    expect(Calculator.divide(2,1)).toBe(2);
  });

  test('3 - Divide 2 from 1 be equal to 0.5', () => {
    expect(Calculator.divide(1,2)).toBe(0.5);
  });
});

describe('Multiply method ', () =>{
  test('1 - Multiply 0 from 1 be equal to 0', () => {
    expect(Calculator.multiply(0,1)).toBe(0);
  });

  test('2 - Multiply 1 from 1 be equal to 1', () => {
    expect(Calculator.multiply(1,1)).toBe(1);
  });

  test('3 - Multiply 3 from 5 be equal to 15', () => {
    expect(Calculator.multiply(5,3)).toBe(15);
  });
});