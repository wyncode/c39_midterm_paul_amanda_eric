// import React, { useState, useEffect } from 'react';
// import { AppContextProvider } from './context/AppContext';
// import ContextDemo from './components/ContextDemo';

// import './App.css';

// const App = () => {
//   const [serverMessage, setServerMessage] = useState('');

//   const fetchDemoData = () => {
//     fetch('/api/demo')
//       .then((response) => response.json())
//       .then((data) => setServerMessage(data.message));
//   };

//   useEffect(fetchDemoData, []);

//   return (
//     <AppContextProvider>
//       <div id="demo">
//         <h3>Hello from client/src/App.js</h3>
//         <ContextDemo />
//         <h3>{serverMessage}</h3>
//       </div>
//     </AppContextProvider>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Beerinfo from './pages/Beerinfo';
import Results from './pages/Results';
import Searchbar from './components/Searchbar';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
