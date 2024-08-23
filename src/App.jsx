import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, decrementTen, increment, incrementTen, reset} from "./reducer/counterReducer.js";

const App = () => {
    const dispatch = useDispatch()
    const {count}= useSelector((state) => state.counterReducer)
    console.log(count)
    const plus = () => {
        dispatch(increment())
    }
    const minus = () => {
        if (count > 0){
            dispatch(decrement())
        }

    }
    const plusTen = () => {
        dispatch(incrementTen())

    }
    const minusTen = () => {
        dispatch(decrementTen())

    }
    const resetFunc = () => {
        dispatch(reset())

    }


    return (
        <div>
            <span>{count}</span>
            <button onClick={()=> plus()}>+</button>
            <button onClick={() => minus()}>-</button>
            <button onClick={ () => plusTen()}>+10</button>
            <button onClick={() => minusTen()}>-10</button>
            <button onClick={() => resetFunc()}>reset</button>
        </div>
    );
};

export default App;