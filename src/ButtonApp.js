import React from 'react';
import Button from './Button';
import Display from './ButtonDisplay';

function ButtonApp() {
    const [counter, setCounter] = React.useState(0);
    const incrementCounter = () => setCounter(counter+1);
    return (
        <div>
            <Button incrementCounter={incrementCounter}/>
            <Display counter={counter}/>
        </div>
    );
}

export default ButtonApp;