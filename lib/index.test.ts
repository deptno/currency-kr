import krw from '.';

describe('한글', () => {
    const amount = 1000000000000000; // 1000조
    it('1,000,000,000,000,000원', () => {
        expect(krw['조원'](amount)).toBe('1,000');
        expect(krw['억원'](amount)).toBe('10,000,000');
        expect(krw['백만원'](amount)).toBe('1,000,000,000');
        expect(krw['만원'](amount)).toBe('100,000,000,000');
    });
    it('precision 1, 2, 3, 4', () => {
        expect(krw['조원'](amount, 1)).toBe('1,000.0');
        expect(krw['조원'](amount, 2)).toBe('1,000.00');
        expect(krw['조원'](amount, 3)).toBe('1,000.000');
        expect(krw['조원'](amount, 4)).toBe('1,000.0000');
    });
    it('partial import', () => {
        const {백원, 천원} = krw;
        expect(백원(10000)).toBe('100');
        expect(천원(10000)).toBe('10');
    });
});
describe('english', () => {
    const amount = 1000000000000000; // 1000조
    it('1,000,000,000,000,000원', () => {
        expect(krw.t(amount)).toBe('1,000');
        expect(krw.b(amount)).toBe('10,000,000');
        expect(krw.m100(amount)).toBe('1,000,000,000');
        expect(krw.m(amount)).toBe('100,000,000,000');
    });
    it('precision 1, 2, 3, 4', () => {
        expect(krw.t(amount, 1)).toBe('1,000.0');
        expect(krw.t(amount, 2)).toBe('1,000.00');
        expect(krw.t(amount, 3)).toBe('1,000.000');
        expect(krw.t(amount, 4)).toBe('1,000.0000');
    });
    it('partial import', () => {
        const {w100, w1000} = krw;
        expect(w100(10000)).toBe('100');
        expect(w1000(10000)).toBe('10');
    });
});