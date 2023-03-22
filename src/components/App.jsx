import React from "react";
import ForRegisteredForm from "./forRegisteredForm";
import ForUnregisteredForm from "./forUnregisteredForm";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <ForRegisteredForm /> : <ForUnregisteredForm />}
    </div>
  );
}

export default App;
