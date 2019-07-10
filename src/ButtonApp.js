import React from 'react';
import Button from './Button';
import Display from './ButtonDisplay';

function ButtonApp() {
    const [counter, setCounter] = React.useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
    return (
        <div>
            <Button incrementCounter={incrementCounter} increment={5}/>
            <Button incrementCounter={incrementCounter} increment={10}/>
            <Button incrementCounter={incrementCounter} increment={15}/>
            <Button incrementCounter={incrementCounter} increment={20}/>
            <Display counter={counter}/>
        </div>
    );
}

export default ButtonApp;