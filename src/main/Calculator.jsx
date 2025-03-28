import React, { Component } from "react";
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    displayValue: '0',  
    clearDisplay: false, 
    operation: null,     
    values: [0, 0],      
    current: 0        
};

export default class Calculator extends Component {
    state = { ...initialState };

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState({ ...initialState });
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({
                operation,
                current: 1, 
                clearDisplay: true  
            });
        } else {
            const equals = operation === '=';
            const values = [...this.state.values];

          
            try {
                values[0] = this.performOperation(values[0], values[1], this.state.operation);
            } catch (e) {
                values[0] = this.state.values[0];  
            }

            values[1] = 0;  
            this.setState({
                displayValue: values[0].toString(),
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals, 
                values
            });
        }
    }

    performOperation(value1, value2, operation) {
        switch (operation) {
            case '+':
                return value1 + value2;
            case '-':
                return value1 - value2;
            case '*':
                return value1 * value2;
            case '/':
                return value1 / value2;
            default:
                return value2;
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;

        this.setState({ displayValue, clearDisplay: false });

        if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" className="clear" onClick={this.clearMemory} />
                <Button label="/" className="operator" onClick={this.setOperation} />
                <Button label="7" className="num" onClick={this.addDigit} />
                <Button label="8" className="num" onClick={this.addDigit} />
                <Button label="9" className="num" onClick={this.addDigit} />
                <Button label="*" className="operator" onClick={this.setOperation} />
                <Button label="4" className="num" onClick={this.addDigit} />
                <Button label="5" className="num" onClick={this.addDigit} />
                <Button label="6" className="num" onClick={this.addDigit} />
                <Button label="-" className="operator" onClick={this.setOperation} />
                <Button label="1" className="num" onClick={this.addDigit} />
                <Button label="2" className="num" onClick={this.addDigit} />
                <Button label="3" className="num" onClick={this.addDigit} />
                <Button label="+" className="operator" onClick={this.setOperation} />
                <Button label="0" className="wide num" onClick={this.addDigit} />
                <Button label="." className="num" onClick={this.addDigit} />
                <Button label="=" className="equal" onClick={this.setOperation} />
            </div>
        );
    }
}
