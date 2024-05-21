import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./Component/Navigation";
import EmpNavigation from "./Component/EmpNavigation";
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Login from './pages/Login';
import NoNavbarPage from './Component/noNavigation';
import Home from './pages/Home';


function App() {//This is the function that contains the react app
  return (
    <BrowserRouter>{/*This wraps the whole app in the BrowserRouter which handles navigation and routing in a react application */}

      {/* <Navigation /> The navigation is outside cause the route wont change */}
        <Routes>{/*This is a container for all the Route definition */}
          <Route 
          path="/" 
          element={
            <>
              <NoNavbarPage navItems={['Dashboard', 'Chat', 'Login']} />
              <Home />
            </>
          }
          />
          <Route
          path="/dashboard"
          element={
            <>
              <Navigation navItems={['Dashboard', 'Chat']} />
              <Dashboard />
            </>
          }
        />
          {/* Route difines how different url are handled, This renders the Home element in the react app*/}
          <Route 
          path="/login" 
          element={
            <>
              <EmpNavigation navItems={['Home']} />
              <Login />
            </>
          }
          />
        </Routes>
          <Routes>
          <Route path="/chat" element={<Chat />} />{/*Renders the Login element*/}
          </Routes>
    </BrowserRouter>
  );
}

export default App;