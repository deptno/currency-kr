import * as currency from 'currency-formatter';

const UNIT = ['', '십', '백', '천', '만', '십만', '백만', '천만', '억', '십억', '백억', '천억', '조', '십조', '백조', '천조'];
const UNIT_EN = ['w', 'w10', 'w100', 'w1000', 'm', 'm10', 'm100', 'm1000', 'b', 'b10', 'b100', 'b1000', 't', 't10', 't100', 't1000']
const comma = (unit = 1) => (raw: number, precision = 0) => currency.format(raw / unit, {precision});

export default UNIT.reduce((ret, cur, index) => {
    ret[UNIT_EN[index]] = ret[`${cur}원`] = comma((Math.pow(10, index)));
    return ret;
}, {});
