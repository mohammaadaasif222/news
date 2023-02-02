import "./App.css";
import React from "react";
import Navbar from "./Componants/Navbar";
import News from "./Componants/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const pageSize = 9;

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exct
            path="/"
            element={
              <News
                
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exct
            path="/business"
            element={
              <News
                
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exct
            path="/entertainment"
            element={
              <News
                
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exct
            path="/general"
            element={
              <News
                
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exct
            path="/health"
            element={
              <News
                
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exct
            path="/science"
            element={
              <News
                
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exct
            path="/sports"
            element={
              <News
                
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            exct
            path="/technology"
            element={
              <News
                
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
