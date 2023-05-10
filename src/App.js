// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './component/Project';
import Main from './routes/Main';

function App() {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/Project' element={<Project />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
