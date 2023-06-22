import './App.css';

import AppRoutes from './AppRoutes';

import Home from './components/Home';
//import SolicitaCaronaMaps from './components/Carona_Maps/index';
import GlobalStyles from './assets/styles/global';

function App() {

  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
}

export default App;
