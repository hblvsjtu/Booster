// src/components/Hello.tsx

import React from 'react';
import {isArray, isPlainObject} from 'lodash-es';
import './Hello.less';
import '../../style/variable/index.less';

function Hello({name, enthusiasmLevel = 1}) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
    if (isArray([])) {
        console.log('引用了lodash');
    }

    const login = async () => {
        const option = {
            url: '/api/user/login',
            method: 'post',
            data: {
                userName: 'liming',
                password: '12345678',
            },
            headers: {
                'content-type':
                    'application/x-www-form-urlencoded;charset=utf-8',
            },
        };
    };

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <button type="button" onClick={login}>
                登陆
            </button>
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}
