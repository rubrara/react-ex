import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import UserGreeting from "./components/UserGreeting";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      <UserGreeting /> {/* <ParentComponent />  */} {/* <EventBind />  */}{" "}
      {/* <ClassClick /> */} {/* <FunctionClick />  */} {/* <Counter />  */}{" "}
      {/* <Message />{" "}{" "} */}{" "}
      {/* <Greet name="Diana" heroName="Wonder Woman" /> */}{" "}
      {/* <Welcome name="Bruce" heroName="Batman" />{" "} */}{" "}
      {/* <Hello name="Bruce" />
                                                                                                                                                                  <Hello name="Clark" />
                                                                                                                                                                  <Hello name="Diana" /> */}{" "}
    </div>
  );
}

export default App;
