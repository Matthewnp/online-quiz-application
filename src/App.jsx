import {  Routes, Route } from 'react-router';
import CreateQuiz from './Components/CreateQuiz';
import TakeQuiz from './Components/TakeQuiz';
import Result from "./Components/result"

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<CreateQuiz />} />
        <Route path="/quiz/:id" element={<TakeQuiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
 
  );
}