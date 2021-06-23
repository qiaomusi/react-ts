import React from 'react';

interface IProps {
    count: number,
    increment: () => void,
    decrement: () => void,
    title?: string
}

const Counter = ({increment, decrement, count}: IProps) => {
    return (
        <>
            <h1> { count } </h1>
            <button onClick={increment}> 增加 </button>
            <button onClick={decrement}> 增加 </button>
        </>
    )
}

export default Counter;