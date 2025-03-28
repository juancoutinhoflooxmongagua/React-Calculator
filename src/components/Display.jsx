import React from "react";
import './../main/Calculator.css';

export default function Display({ value }) {
    return (
        <div className="display">{value}</div>
    );
}
