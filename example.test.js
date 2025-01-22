// example.test.js

describe('Simple Jest Tests', () => {
    test('should pass a basic truthy test', () => {
      expect(true).toBe(true);
    });
  
    test('should handle addition correctly', () => {
      const sum = 1 + 1;
      expect(sum).toBe(2);
    });
  
    test('should check if an array contains a value', () => {
      const fruits = ['apple', 'banana', 'orange'];
      expect(fruits).toContain('banana');
    });
  });
  