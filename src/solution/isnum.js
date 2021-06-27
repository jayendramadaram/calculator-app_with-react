import React from 'react'

export default function isnum(num) {
    const i = num
    const reg = new RegExp("[0-9]",'g');

    return reg.test(i);
}
