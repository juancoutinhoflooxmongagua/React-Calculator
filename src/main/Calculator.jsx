import React, { Component } from "react";
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0 , 0],
    current: 0
};

export default class Calculator extends Component {
    state = { ...initialState }

    constructor(props){
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.calculate = this.calculate.bind(this);
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
            this.calculate();
            this.setState({
                operation,
                current: 1,
                clearDisplay: true
            });
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
    }

    calculate() {
        const [first, second] = this.state.values;
        const { operation } = this.state;

        if (operation === '+') {
            this.setState({
                displayValue: (first + second).toString(),
                operation: null,
                current: 0
            });
        } else if (operation === '-') {
            this.setState({
                displayValue: (first - second).toString(),
                operation: null,
                current: 0
            });
        } else if (operation === '*') {
            this.setState({
                displayValue: (first * second).toString(),
                operation: null,
                current: 0
            });
        } else if (operation === '/') {
            if (second === 0) {
                this.setState({
                    displayValue: 'Error',
                    operation: null,
                    current: 0
                });
            } else {
                this.setState({
                    displayValue: (first / second).toString(),
                    operation: null,
                    current: 0
                });
            }
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" className="clear" onClick={this.clearMemory} />
                <Button label="/" className="operator" onClick={() => this.setOperation('/')} />
                <Button label="7" className="num" onClick={() => this.addDigit('7')} />
                <Button label="8" className="num" onClick={() => this.addDigit('8')} />
                <Button label="9" className="num" onClick={() => this.addDigit('9')} />
                <Button label="*" className="operator" onClick={() => this.setOperation('*')} />
                <Button label="4" className="num" onClick={() => this.addDigit('4')} />
                <Button label="5" className="num" onClick={() => this.addDigit('5')} />
                <Button label="6" className="num" onClick={() => this.addDigit('6')} />
                <Button label="-" className="operator" onClick={() => this.setOperation('-')} />
                <Button label="1" className="num" onClick={() => this.addDigit('1')} />
                <Button label="2" className="num" onClick={() => this.addDigit('2')} />
                <Button label="3" className="num" onClick={() => this.addDigit('3')} />
                <Button label="+" className="operator" onClick={() => this.setOperation('+')} />
                <Button label="0" className="wide num" onClick={() => this.addDigit('0')} />
                <Button label="." className="num" onClick={() => this.addDigit('.')} />
                <Button label="=" className="equal" onClick={this.calculate} />
            </div>
        );
    }
}
