import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Details from './Pages/Details/Details';
import Layout from './Pages/Layout/Layout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
