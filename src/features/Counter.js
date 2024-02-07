// from redux
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';

//from CounterSlice
import { increment, decrement, selectCount, reset } from './counterSlice';

function Counter() {
        // reading the count state
    const count = useSelector(selectCount);

    //useState => local state
    const [incrementAmount, setIncrementAmount] = useState(1);

    // dispatch function
    const dispatch = useDispatch();


    return (
        <div>
            <h2> Count: {count} </h2> 
            <button onClick={() => dispatch(increment(incrementAmount))} > + </button>
            
            <input 
             type='number' 
             min="1" step="1" 
             value={incrementAmount} 
             onChange={(e) => setIncrementAmount(e.target.value)}
             />

            <button onClick={() => dispatch(decrement(incrementAmount)) }> - </button>
            <br />

            <button onClick={() =>{
            setIncrementAmount (1);
            dispatch(reset());
            
            }}> Reset </button>


        </div>
    )
}

export default Counter;