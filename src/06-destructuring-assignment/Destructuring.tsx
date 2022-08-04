import React from 'react';
import {ManType} from './destructuring.test';

type DestructuringType = {
    title: string
    man: ManType
    food: Array<string>
}

export const Destructuring: React.FC<DestructuringType> = ( {title, man, ...props} ) => {

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>

        </div>
    )
}