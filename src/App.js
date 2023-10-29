import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Details from './Pages/Details/Details';
import Layout from './Pages/Layout/Layout';
import SearchBar from './Pages/Home/Partils/SearchBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path='/SearchBar' element={<SearchBar />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
