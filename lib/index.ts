import * as currency from 'currency-formatter';

const UNIT = ['', '백', '천', '만', '십만', '백만', '천만', '억', '십억', '백억', '천억', '조', '십조', '백조', '천조'];

const KRW = {
    십:   10,
    백:  100,
    천:   1000,
    만:   10000,
    십만:  100000,
    백만:  1000000,
    천만:  10000000,
    억:  100000000,
    십억:  1000000000,
    백억:  10000000000,
    천억:  100000000000,
    조:    1000000000000,
};

const comma = (unit = 1) => (raw: number, precision = 0) => currency.format(raw / unit, {precision});

export default UNIT.reduce((ret, cur) => {
    ret[`${cur}원`] = comma(KRW[cur]);
    return ret;
}, {});
