import NavBar from './NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<></>}/>
        <Route path="/movies/:movieId" element={<></>}>
          <Route path="/cast" element={<></>}/>
          <Route path="/reviews" element={<></>}/>
        </Route> */}
      </Routes>
    </>
  );
};

export default App;
