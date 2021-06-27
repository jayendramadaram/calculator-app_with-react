import React from 'react'

import Big from 'big.js'

import isnum from './isnum'
import operate from './operate'

export default function calc(obj , bname) {

    if (bname === 'AC') {
        return {
            total : null,
            next : null,
            operation : null,
        }
    }

    if (isnum(bname)) {
        if (bname === '0' && obj.next ==='0') {
            return {}
        }

        if (obj.operation) {
            if (obj.next) {
                return {next: obj.next + bname }
            }
            return { next : bname}
        }

        if (obj.next) {
            const next = obj.next === "0" ? bname : obj.next + bname;

            return {
                next,
                total : null,
            }
        }

        return {
            next:bname,
            total:null,
        }

    }

    if (bname === '%') {
        if (obj.operation && obj.next) {
            const res = operate(obj.total , obj.next , obj.operation)
            return {
                total : Big(res).div(Big('100')).toString(),
                next: null,
                operation:null
            }
        }
        if (obj.next) {
            return {
                next:Big(obj.next)
                .div(Big("100")).toString()
            }
        }
        return {}
    }

    if (bname === '.') {
        if (obj.next) {
            if (obj.next.includes('.')) {
                return {}
            }
            return {next : obj.next + '.'}
        }
        return {next : '0.'}
    }

    if (bname === '=') {
        if (obj.next && obj.operation){
            return {
                total : operate(obj.total , obj.next , obj.operation),
                next : null,
                operation : null
            }
            
        }
        else {
            return {}
        }
    }

    if (bname === "+/-") {
        if (obj.next) {
          return { next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
          return { total: (-1 * parseFloat(obj.total)).toString() };
        }
        return {};
      }

    if (obj.operation) {
        return {
            total : operate(obj.total ,obj.next , obj.operation),
            next : null,
            opertation : bname
        }
    }

    if (!obj.next) {
        return { operation: bname };
      }

    return {
        total : obj.next,
        next:null,
        operation : bname

    }
}
