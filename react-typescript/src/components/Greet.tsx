import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <h2>
      {props.isLoggedIn
        ? `Welcome ${props.name} ! You have ${props.messageCount} Unread Messages`
        : `Welcome Guest`}
    </h2>
  );
};

// export default Greet;
