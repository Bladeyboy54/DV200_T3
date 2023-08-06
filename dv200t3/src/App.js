import './App.css';
import Landing from "./pages/landing";
import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import BasicNav from './components/navbar';

function App() {
  return (
    <div className="App">
        <BasicNav/>
      <Routes>
        <Route path='/' element= { <Landing /> } />
      </Routes>
    </div>
  );
}

export default App;
