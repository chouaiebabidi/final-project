import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import { useDispatch } from 'react-redux';
import { userCurrent } from './JS/userSlice/userSlice';
import { useEffect, useState } from 'react';
import Profil from './component/Profil';
import NavBar from './component/NavBar';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Services from './component/Services';
import Modale from './component/Modale';
import PrivateRoute from './PrivetRoute/PrivateRoute';
import { getcommande } from './JS/commandeSlice';



function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false)
  useEffect(() => {

    dispatch(userCurrent());
    dispatch(getcommande());




  }, [ping])

  return (
    <div className="App" >
      <NavBar />
      <Routes>

        <Route exact path="/register" element={<Register ping={ping} setping={setping} />} />
        <Route path="/login" element={<Login ping={ping} setping={setping} />} />
        <Route path="/modale" element={<Modale ping={ping} setping={setping} />} />

        <Route path="/home" element={<Home ping={ping} setping={setping} />} />
        <Route path="/" element={<Home ping={ping} setping={setping} />} />
        <Route path="/contact" element={<Contact ping={ping} setping={setping} />} />
        <Route path="/services" element={<Services ping={ping} setping={setping} />} />
        <Route path="/profil" element={<Profil ping={ping} setping={setping} />} />
        {/* 
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil ping={ping} setping={setping} />} />
        </Route> */}


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
