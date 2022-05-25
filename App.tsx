import * as React from 'react';
import './style.css';
import Accordian from './Accordian/accordian';

const Data = ['Text one', 'Text two', 'Text three'];
export default function App() {
  const [flag, setFlag] = React.useState(0);
  const changeTab = (i) => {
    setFlag(i);
  };

  React.useEffect(() => {});
  return (
    <div>
      <h1>Hello Folks!</h1>
      <p>Accordian Future with one Line content and toggle button :)</p>
      {Data.map((dt, i) => (
        <Accordian
          text={dt}
          id={i}
          clsName={flag === i ? 'ActiveClass' : 'NonActiveClass'}
          fun={changeTab}
        ></Accordian>
      ))}
    </div>
  );
}
