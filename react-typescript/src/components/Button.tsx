import React from "react";

type ButtonProps = {
  // TO PASS AN EVENT WE ADD IT TO THE ()
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 2)}>
      Click me Senpai
    </button>
  );
};

export default Button;
