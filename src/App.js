import './App.css';
// import { useEffect, useState } from 'react';
// import CRUD from './components/crud';
import CRUDAxios from './components/crud-axios';
import CRUDAxiosContext from './components/crud-axios-context';
import { StudentProvider } from './components/studentContext';

// function CheckBox(props) {
//   return (
//     <>
//       <input type="checkbox" name={props.name} value={props.name}></input>
//       <label htmlFor="git_cli"> {props.label}</label>
//     </>
//   )
// }

function App() {
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  // const [timer, setTimer] = useState(10);
  // function updateTime() {
  //   setTime(new Date().toLocaleTimeString());
  //   setTimer(timer - 1);
  // }

  // useEffect(() => {
  //   if (timer !== 0) {
  //     setTimeout(updateTime, 1000);
  //   }
  // })
  return (
    <>
      {/* {
        timer === 0 ?
          null
          :
          <div className='time'>
            <p>Now At - {time}</p>
            <p>Countdown: {timer}</p>
          </div>
      } */}

      <div className="App">
        {/* <header className="App-header">
          <img src='logo.png' className="App-logo" alt="logo" />
        </header> */}
        <main>
          {/* <h1> THINGS TO DO </h1>
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
          <CRUD /> */}
          {/* <CRUDAxios /> */}
          <StudentProvider>
            <CRUDAxiosContext />
          </StudentProvider>
        </main>
      </div>
    </>
  );
}

export default App;
