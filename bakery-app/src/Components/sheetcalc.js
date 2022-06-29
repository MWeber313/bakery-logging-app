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
            <h5>Sixteen Count</h5>
            <form>
                <label for='choc16'>Chocolate Chip</label>
                <input name='choc16' type='number' id='choc16'></input>
                <label for='mnm16'>Candy Chip</label>
                <input name='mnm16' type='number' id='mnm16'></input>
                <label for='sugar16'>Sugar</label>
                <input name='sugar16' type='number' id='sugar16'></input>
                <label for='oat16'>Oatmeal</label>
                <input name='oat16' type='number' id='oat16'></input>
            </form>
        </div>
        )
    }
}

export default SheetCalculatorFrame;