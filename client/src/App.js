import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AllPets />} path="/" />
          <Route element={<AllPets />} path="/pets" />
          <Route element={<NewPet />} path="/pets/new" />
          <Route element={<EditPet />} path="/pets/edit/:id" />
          <Route element={<OnePet />} path="/pets/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
