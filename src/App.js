import './App.css';
import React, { useState } from 'react'
import Navbar from './Componants/Navbar';
import News from './Componants/News';
import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const  App = () => {
  const pageSize = 9;
  const [progress, setProgress] = useState(0)
  


    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={2.5}
        color='White'
        progress={progress}
         />
        <Routes>
          <Route exct path="/" element={<News setProgress={setProgress}   key='general' pageSize={pageSize}  country="in" category="general"/>}></Route>
          <Route exct path="/business" element={<News setProgress={setProgress}  key='business' pageSize={pageSize}  country="in" category="business"/>}></Route>
          <Route exct path="/entertainment" element={<News setProgress={setProgress}   key='entertainment' pageSize={pageSize}  country="in" category="entertainment"/>}></Route>
          <Route exct path="/general" element={<News setProgress={setProgress}  key='general' pageSize={pageSize}  country="in" category="general"/>}></Route>
          <Route exct path="/health" element={<News setProgress={setProgress}  key='health' pageSize={pageSize}  country="in" category="health"/>}></Route>
          <Route exct path="/science" element={<News setProgress={setProgress}   key='science' pageSize={pageSize}  country="in" category="science"/>}></Route>
          <Route exct path="/sports" element={<News setProgress={setProgress}   key='sports' pageSize={pageSize}  country="in" category="sports"/>}></Route>
          <Route exct path="/technology" element={<News setProgress={setProgress}   key='technology' pageSize={pageSize}  country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }

  export default App;