export interface KRW {
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
