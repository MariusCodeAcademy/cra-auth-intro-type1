import './App.css';
import { Switch, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='container'>
      <Switch>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// prideti react routeri
// /register - registerPage
// /login - loginPage
// / - HomePage
