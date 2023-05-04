import TestComponent from './components/test';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home.js"

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home />} />

    </Routes>
      <TestComponent/>
    </>
  );
}

export default App;
