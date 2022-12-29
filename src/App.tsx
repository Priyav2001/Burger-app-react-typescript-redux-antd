import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import store from "./redux/store";
import Forms from "./pages/Forms/Forms";


  function App() 
   {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Forms" element={<Forms/>}></Route>
            </Routes>
            {/* <Footer /> */}
          </Router>
        </Provider>
      </>
    );
  }
// }

export default App;

