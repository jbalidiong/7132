import ViewData from './pages/viewData';
import GetData from './pages/getData';
import Layout from './pages/layOut';
import Home from './pages/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="viewdata" element={<ViewData />} />
          <Route path="getdata" element={<GetData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
