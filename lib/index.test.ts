import currency from '.';

describe('constructor', () => {
    const amount = 1000000000000000; // 1000조
    it('1,000,000,000,000,000원', () => {
        expect(currency['조원'](amount)).toBe('1,000');
        expect(currency['억원'](amount)).toBe('10,000,000');
        expect(currency['백만원'](amount)).toBe('1,000,000,000');
        expect(currency['만원'](amount)).toBe('100,000,000,000');
    });
    it('1,000,000,000,000,000원', () => {
        expect(currency['조원'](amount, 1)).toBe('1,000.0');
    });
});