import Contact from "./Contact/Contact";
import { Component } from "react";
import State from "./Contact/Contact";

class App extends Component {
  render() {
      return (
    <div
      style={{
        height: '20vh',
        display: 'flex',
        flexDirection: 'column',
        gap:"10px",
        fontSize: 40,
        color: '#010101',
        fontWeight: '500',
      }}
    >
      Phonebook
          <State title="Contact" state={Contact} />
    </div>
  );
  }
}

export { App };