import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './JS/Login';
import Register from './JS/Register';
import Profile from './JS/Profile';
import ForgotPassword from './JS/ForgotPassword'
import Email from './JS/Email'
import React from 'react';
import {Navigate} from 'react-router-dom'

export const CommonContext=React.createContext();
const apiurl='http://localhost:8000'
function App() {
  return <>
    <BrowserRouter>
    <CommonContext.Provider value={{apiurl}}>
       <Routes>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/forgotpass' element={<ForgotPassword/>}/>
          <Route path='/email' element={<Email/>}/>
          <Route path='*' element={<Navigate to="/signin" />}/>
       </Routes>
    </CommonContext.Provider>
    </BrowserRouter>
  </>
}

export default App;
