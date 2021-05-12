import react from "react";
import reactDOM from "react-dom";
import htm from "htm";

const html = htm.bind(react.createElement);

export function mount(element, component, props, children) {
  reactDOM.render(react.createElement(component, props, ...children), element);
}

export function ExampleCounter(props) {
  const [count, setCount] = react.useState(0);

  const updateCount = () => {
    const newCount = count + 1;
    props.onCountChange(newCount);
    setCount(newCount);
  };

  return html`<div>
    <button id=${props.buttonId} onClick=${updateCount}>${props.buttonText}</button>
    <p>current count is: ${count}</p>
  </div>`;
}
