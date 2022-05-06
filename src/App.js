
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Posts } from './pages/Posts';
import { UserSinge } from './pages/UserSingles';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
   <Routes >
     <Route path = '/' element = {<Home />} />
     <Route path = '/users' element = {<Users />} />
     <Route path = '/user/:id' element = {<UserSinge />} />
     <Route path = '/posts' element = {<Posts />} />
   </Routes>
    <Footer />
    </div>
  );
}

export default App;
