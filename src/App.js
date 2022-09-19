import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Contacts from './components/Contacts';
import News from './components/News';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import NewsDetail from './components/NewsDetail';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from './store/newsSlice';

function App() {
  const dispatch = useDispatch();
  const {status, error} = useSelector(state => state.news);


  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />}/>
          <Route path='news' element={<News />}/>
          <Route path='news/:id' element={<NewsDetail />}/>
          <Route path='contacts' element={<Contacts />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
