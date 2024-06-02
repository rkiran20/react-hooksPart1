import './App.css';
import LoginForm from './components/LoginForm';
import SearchBtn from './components/SearchBtn';
import State from './components/State';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';

function App() {
  return (
    <div className="App">
      login form
      <LoginForm />
      <p>this is a random website where u can login with your details and sign in</p>
      <LoginForm />
      this is a search button
      <SearchBtn id="seracgaiu"/>
      <State />
      <UseRef />
      <UseEffect />
    </div>
  );
}

export default App;
