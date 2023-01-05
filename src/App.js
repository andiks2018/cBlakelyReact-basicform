import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Fetch from './pages/Fetch';
import Form from './pages/Form';
import Hapus from './pages/Hapus';
import Props from "./pages/Props"
import ConditonalRendering from './pages/ConditionalRendering'
import Hapus2 from './pages/Hapus2';
import RouterdomBlog from './pages/RouterdomBlog';
import Home from './pages/Home'
import FormC from './pages/FormC';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/fetch' element={<Fetch />} />
      <Route path='/form' element={<Form />} />
      <Route path='/formc' element={<FormC />} />
      <Route path='/hapus' element={<Hapus />} />
      <Route path='/props' element={<Props />} />
      <Route path='/cond' element={<ConditonalRendering />} />
      <Route path='/hapus2' element={<Hapus2 />} />
      <Route path='/router' element={<RouterdomBlog />} />
      <Route path='*' element={
        <div className='text-center items-center 
        border border-red-500'>
          <h1>404 Page</h1>
          <p>page not found...</p>
        </div>
      } />
    </Routes>
  );
}

export default App;
