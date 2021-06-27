import Big from "big.js";

import React from 'react'

export default function operate(n1,n2,operation) {

    const one = Big(n1 || '0')
    const two = Big(n2 || (operation === 'x' || operation === '÷' ? '1':'0' ))

    if (operation === '+') {
        return one.plus(two).toString();
    }
    if (operation === '-') {
        return one.minus(two).toString();
    }
    if (operation === '÷') {
        if (two === '0') {
            alert('number cant be divisible by zero')
            return '0';
        }
        else {
            return one.div(two).toString()
        }
    }
    if (operation === 'x') {
        return one.times(two).toString();
    }
    throw Error(`no dude unknown operations sorry ${operation} if you think your operation is correct ping me i will fix bug`)
}
