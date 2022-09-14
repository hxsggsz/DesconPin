import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { Header } from './partials/header/Header';
import { Footer } from './partials/header/footer/Footer';
import { MinhasPastasPage } from './pages/minhasPastas/MinhasPastasPage';
import { AppContext } from './store/AppContext';

const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null,
  pins: []
}

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppContext initialState={initialState}>
          <Header />
            <Routes>
              <Route path='/' element={<HomePage  />} />
              <Route path='/minhas-pastas' element={<MinhasPastasPage />} />
            </Routes>
          <Footer />
        </AppContext>
      </div>
    </BrowserRouter>
  );
};

export default App;
