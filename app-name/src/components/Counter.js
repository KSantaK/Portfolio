import Button from "./Button";

import { useState } from "react";

function Counter () {
    const (Counter, setCounter) = useState(0);

    return (
        <div>
            <Button
                onClick={() => {
                    setCounter(counter - 1);
                }}
                >
                    -         
            </Button>
            <p>{counter}</p>
            <Button
            onClick = {() => {
                setCounter (counter+1);
            }}
            >
                +
            </Button>
        </div>
    );
}

export default Counter;