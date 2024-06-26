// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './component/Project';
import Main from './routes/Main';
import Samsung from './component/Samsung';
import Cjone from './component/Cjone';
import Netflix from './component/Netflix';
import Kakao from './component/Kakao';
import Pure from './component/Pure';
import Menu from './component/Menu';
import Cover from './component/Cover';
import Introduction from './component/Introduction';


function App() {
  

  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<Cover />}/>
      <Route path='/Main' element={<Main />}/>
      <Route path='/Menu' element={<Menu />}/>
      <Route path='/Project' element={<Project />}/>
      <Route path='/Samsung' element={<Samsung />}/>
      <Route path='/Cjone' element={<Cjone />}/>
      <Route path='/Netflix' element={<Netflix />}/>
      <Route path='/Kakao' element={<Kakao />}/>
      <Route path='/Pure' element={<Pure />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
