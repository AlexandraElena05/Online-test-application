import React from 'react';
import axios from "axios";
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home'
import Difficulty from './pages/Difficulty'
import Quiz from './pages/Quiz.js'
import Results from "./pages/Results";


function App() {

  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10$${
        difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
        {/* <Switch> */}
          {/* <Route path="/" component={Home} exact> */}
          <Route path='/' element={<Home name={name}
              setName={setName}
              />} />
            {/* <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            /> */}
          
          <Route path='/difficulty' element={<Difficulty name={name} fetchQuestions={fetchQuestions}/>} />
          {/* <Route path="/difficulty">
            <Difficulty name={name}/>R
          </Route> */}
           <Route path='/quiz' element={<Quiz name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}/>} />
          {/* <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route> */}
          <Route path='/results' element={<Results name={name} score={score}/>} />
           {/* <Route path="/results">
            <Results name={name} score={score} />
          </Route>
         </Routes> */}
        {/* </Switch> */}
        </Routes>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
