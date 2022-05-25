import React, { useState, useEffect } from 'react';
import './accordian.css';

export default function Accordian(props) {
  console.log(props.fun);
  return (
    <div className={' Accordian'}>
      <p>
        <button onClick={() => props.fun(props.id)}>Toggle</button>
      </p>
      <p className={props.clsName}>{props.text}</p>
    </div>
  );
}
