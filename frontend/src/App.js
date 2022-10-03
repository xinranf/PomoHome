import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Start from './pages/Start';
import { useEffect } from 'react';
import Store from './pages/Store';
import Decor from './pages/Decor';
import Setting from './pages/Setting';


function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (user) {
      const currentTime = new Date().getTime();
      const timestamp = user.timestamp;
      // console.log(currentTime, timestamp);
      if (currentTime - timestamp > 1 * 60 * 60 * 1000){
      // if (currentTime - timestamp > 20 * 1000){
        localStorage.removeItem('user');
        console.log("user removed");
      }
    }
  })


  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={!user ? <Home /> : <Navigate to="start"/>}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to="/start" />}
            />
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate to="/start" />}
            />
            <Route
              path='/start'
              element={<Start />}
            />
            <Route
              path='/store'
              element={<Store />}
            />
            <Route
              path='/decor'
              element={<Decor />}
            />
            <Route
              path='/setting'
              element={<Setting />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
