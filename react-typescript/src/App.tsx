import React from "react";
import Button from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import { Person } from "./components/Person";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  return (
    <div className="App">
      <Greet
        name="Gayathri"
        messageCount={20}
        isLoggedIn={true}
      />
      <Person name={personName} />
      <Status status="error" />
      <Heading>Placeholder Text</Heading>
      <Button
        handleClick={(event, id) => {
          console.log(`Konichiwa`, event, id);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
      <Counter />
    </div>
  );
}

export default App;
