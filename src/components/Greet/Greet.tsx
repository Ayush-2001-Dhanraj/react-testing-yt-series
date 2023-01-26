import React from "react";

interface GreetProps {
  name?: string;
}

const Greet = ({ name }: GreetProps) => {
  return <div data-testid="greet-msg">Hello{name ? " " + name : ""}</div>;
};

export default Greet;
