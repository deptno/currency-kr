declare module 'currency-kr' {
    function 원(amount: number): string;
    function 십원(amount: number): string;
    function 백원(amount: number): string;
    function 천원(amount: number): string;
    function 만원(amount: number): string;
    function 십만원(amount: number): string;
    function 백만원(amount: number): string;
    function 천만원(amount: number): string;
    function 억원(amount: number): string;
    function 십억원(amount: number): string;
    function 백억원(amount: number): string;
    function 천억원(amount: number): string;
    function 조원(amount: number): string;
    function 십조(amount: number): string;
    function 백조원(amount: number): string;
    function 천조원(amount: number): string;

    function w(amount: number): string;
    function w10(amount: number): string;
    function w100(amount: number): string;
    function w1000(amount: number): string;
    function m(amount: number): string;
    function m10(amount: number): string;
    function m100(anumber): string;
    function m1000(amount: number): string;
    function b(amount: number): string;
    function b10(amount: number): string;
    function b100(amount: number): string;
    function b1000(amount: number): string;
    function t(amount: number): string;
    function t10(amount: number): string;
    function t100(amount: number): string;
    function t1000(amount: number): string;

    export default {
        원, 십원, 백원, 천원, 만원, 십만원, 백만원, 천만원, 억원, 십억원, 백억원, 천억원, 조원, 십조, 백조원, 천조원,
        w, w10, w100, w1000, m, m10, m100, m1000, b, b10, b100, b1000, t, t10, t100, t1000
    };
}
