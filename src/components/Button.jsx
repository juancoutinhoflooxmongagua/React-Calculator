import React from "react";
import './Button.css';

export default function Button({ label, className, onClick }) {
    return (
        <button className={`button ${className}`} onClick={() => onClick(label)}>
            {label}
        </button>
    );
}
