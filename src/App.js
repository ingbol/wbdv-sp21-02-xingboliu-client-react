import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route path="/" exact={true} component={Home}/>
        <Route path="/courses" component={CourseManager}/>
        <Route path="/editor" exact={true} render={(proprs) => <CourseEditor {...proprs}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
