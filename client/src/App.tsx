import {
  BrowserRouter as Switch,
  Routes,
  Route,
} from "react-router-dom";

//importing page routes;
import Login from "./Views/Log/login";
import SignUp from "./Views/Log/signUp";
import HomePage from "./Views/Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signUp' element={<SignUp/>} />
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
