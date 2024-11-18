import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
// import Signup from './Pages/Signup'; // Ensure this is the correct path to your Signup component
import Footer from './Layout/Footer';
import './assets/css/style.css'
import User from './Pages/mockApi';
import View from './crud/View';
import SingleUser from './crud/SingleUser';
import Update from './crud/Update';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route path='/signup' element={<Signup />} /> */}
          <Route path='/' element={<User />} />
          <Route path='/view' element={<View />} />
          <Route path='/SingleUser/:id' element={<SingleUser />} />
          <Route path='/Update/:id' element={<Update />} />
          <Route path='/Update/:id' element={<Footer></Footer>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
