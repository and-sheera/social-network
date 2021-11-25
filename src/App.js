import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Andrew, edit <code>src/App.js</code> and save to reload!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = (props) => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              {/* <Header />
              <Navbar state={props.state.sidebar}/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs'
                         render={ () => <DialogsContainer store={props.store} /> } />
                  <Route path='/profile'
                         render={ () => <Profile store={props.store} /> } />
                  <Route path='/news' render={ () => <News/> } />
                  <Route path='/music' render={ () => <Music/> } />
                  <Route path='/settings' render={ () => <Settings/> } /> */}

            <Header />
            <NavbarContainer />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                        render={ () => <DialogsContainer /> } />
                <Route path='/profile'
                        render={ () => <Profile /> } />
                <Route path='/news' render={ () => <News/> } />
                <Route path='/music' render={ () => <Music/> } />
                <Route path='/settings' render={ () => <Settings/> } />


                {/*<Route path='/dialogs' component={Dialogs} />*/}
                {/*<Route path='/profile' component={Profile}/>*/}
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/settings' component={Settings}/>*/}
            </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
