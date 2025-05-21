// App.js
import React from "react";

// Simple Child Component
const Greeting = (props) => {
  return <h2>Hello, {props.name}! Welcome to React.</h2>;
};

// Parent Component using nested components
const WelcomeMessage = () => {
  return (
    <div>
      <h1>React Nested Components Example</h1>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
};

// App Component
export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <WelcomeMessage />
    </div>
  );
}
