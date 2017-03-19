import * as currency from 'currency-formatter';

interface KRW {
    원(amount: number): string;
    십원(amount: number): string;
    백원(amount: number): string;
    천원(amount: number): string;
    만원(amount: number): string;
    십만원(amount: number): string;
    백만원(amount: number): string;
    천만원(amount: number): string;
    억원(amount: number): string;
    십억원(amount: number): string;
    백억원(amount: number): string;
    천억원(amount: number): string;
    조원(amount: number): string;
    십조(amount: number): string;
    백조원(amount: number): string;
    천조원(amount: number): string;

    w(amount: number): string;
    w10(amount: number): string;
    w100(amount: number): string;
    w1000(amount: number): string;
    m(amount: number): string;
    m10(amount: number): string;
    m100(anumber): string;
    m1000(amount: number): string;
    b(amount: number): string;
    b10(amount: number): string;
    b100(amount: number): string;
    b1000(amount: number): string;
    t(amount: number): string;
    t10(amount: number): string;
    t100(amount: number): string;
    t1000(amount: number): string;
}

const UNIT = ['', '십', '백', '천', '만', '십만', '백만', '천만', '억', '십억', '백억', '천억', '조', '십조', '백조', '천조'];
const UNIT_EN = ['w', 'w10', 'w100', 'w1000', 'm', 'm10', 'm100', 'm1000', 'b', 'b10', 'b100', 'b1000', 't', 't10', 't100', 't1000'];
const comma = (unit = 1) => (raw: number, precision = 0) => currency.format(raw / unit, {precision});

export default UNIT.reduce<KRW>((ret, cur, index) => {
    ret[UNIT_EN[index]] = ret[`${cur}원`] = comma((Math.pow(10, index)));
    return ret;
}, {} as KRW);
