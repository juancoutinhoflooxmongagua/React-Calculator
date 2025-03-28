import React, { Component } from "react";
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Display value="100" />
                <Button label="AC" className="clear" />
                <Button label="/" className="operator" />
                <Button label="7" className="num" />
                <Button label="8" className="num" />
                <Button label="9" className="num" />
                <Button label="*" className="operator" />
                <Button label="4" className="num" />
                <Button label="5" className="num" />
                <Button label="6" className="num" />
                <Button label="-" className="operator" />
                <Button label="1" className="num" />
                <Button label="2" className="num" />
                <Button label="3" className="num" />
                <Button label="+" className="operator" />
                <Button label="0" className="wide num" />
                <Button label="." className="num" />
                <Button label="=" className="equal" />
            </div>
        );
    }
}
