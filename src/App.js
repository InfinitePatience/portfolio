// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './component/Project';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Project />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
