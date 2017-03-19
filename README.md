# currency-won
[![Build Status](https://travis-ci.org/deptno/currency-kr.svg?branch=master)](https://travis-ci.org/deptno/currency-kr)

한국 통화

## Install

```bash
npm install currency-kr
```

## API

```typescript
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
```

## Usage

```typescript
import {백만원} from 'currency-kr';  

console.log(만원(10000, 2)); // "1.00"
console.log(만원(1000000)); // "100"
console.log(만원(10000000)); // "1,000"
```

## License

MIT