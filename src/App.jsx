import './App.css'
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from "./Layout/Layout";
import { GlobalProvider } from './context/ContextGlobal';

function App() {


  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path='/movie/:id' element={<MoviePage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
