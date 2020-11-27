import './App.css';
import Header from './Header/Hearer'
import Nav from './Navbar/Nav'
import Major from './Major/Major'
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
<div className='app-soc-set'>
        <Header className="Header"/>
        <Nav />
        <div className="Major">
          <Route path='/profile' render={() => <Major />} />
        </div>
        
      </div>
      </BrowserRouter>


  );
}

export default App;
/*<div className="App">
      <Nav className="Nav"/>
      <div>
        <Header className="App"/>
        <Major className="App"/>
      </div>
    </div>*/