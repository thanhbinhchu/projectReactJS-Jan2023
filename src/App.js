import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { Diffusion } from './components/Diffusion';

import Login from './components/Login'
import Pilote from './components/Pilote';
import Header from './components/Header';
import Pilote1 from './components/Pilote1';


function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
       
       <Header />

      <div class="container | my-4">

          <Routes>
            
            <Route path="/" element={<Diffusion />} />
            <Route path="/pilote" element={<Pilote />} />
            <Route path="/login" element={<Login />} />

            <Route path="/pilote1" element={<Pilote1 />} />

          </Routes>

      </div>
 
      </BrowserRouter> 

</div>
   
  );
}

export default App;
