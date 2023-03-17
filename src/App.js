import logo from './logo.svg';
import './App.css';

function CheckBox(props) {
  return (
    <>
      <input type="checkbox" name={props.name} value={props.name}></input>
      <label for="git_cli"> {props.label}</label>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='logo.png' className="App-logo" alt="logo" />
      </header>
      <main>
        <h1> THINGS TO DO </h1>
        <p>During bootcamp in sanbercode</p>
        <hr />
        <CheckBox name="git_cli" label="Belajar GIT & CLI" />
        <hr />
        <CheckBox name="html_css" label="Belajar HTML & CSS" />
        <hr />
        <CheckBox name="js" label="Belajar JavaScript" />
        <hr />
        <CheckBox name="react_basic" label="Belajar ReactJS Dasar" />
        <hr />
        <CheckBox name="react_advance" label="Belajar ReactJS Advance" />
      </main>
    </div>
  );
}

export default App;
