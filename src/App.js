import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import QuizzesList from "./components/quiz/quizzes-list";
import Quiz from "./components/quiz/quiz";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route path="/" exact={true} component={Home}/>
        <Route path="/courses" component={CourseManager}/>
        <Route path="/editor" exact={true} render={(proprs) => <CourseEditor {...proprs}/>}/>

        <Route path={"/courses/:courseId/quizzes"} exact={true}>
            <QuizzesList/>
        </Route>
        <Route path={"/courses/:courseId/quizzes/:quizId"} exact={true}>
            <Quiz/>
        </Route>

      </div>
    </BrowserRouter>
  );
}

export default App;
