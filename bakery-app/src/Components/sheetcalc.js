import React from "react";
import {sheetCalculator} from '../HelperFunctions/sheetCalculator';

class SheetCalculatorFrame extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
        <div>
            <h4>Sheet Calculator</h4>
            <ul>
                <li>
                    <p>{sheetCalculator('10', 10)}</p>
                </li>
            </ul>
        </div>
        )
    }
}

export default SheetCalculatorFrame;