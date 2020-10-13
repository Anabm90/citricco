import React from "react";
import { Button } from "react-bootstrap";

const CounterDetails = ({ quantity, counterDecrement, counterIncrement }) => {

    return (
        <div>
            <Button
                className="inc btn btn-light"
                onClick={() => counterIncrement()}
            >
                +
        </Button>
            <Button
                className="dec btn btn-light"
                onClick={() => counterDecrement()}
            >
                -
        </Button>
            {/* <Button
                    className="reset btn btn-light"
                    onClick={() => this.props.counterReset()}
                >
                    Reset
        </Button> */}
            <p>{quantity}</p>
        </div>
    );
}
export default CounterDetails;