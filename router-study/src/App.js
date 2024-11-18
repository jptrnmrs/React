
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Result1 from './components/Result1';
import Result2 from './components/Result2';
import Result3 from './components/Result3';

function App() {



  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Main />}></Route>
        <Route path='/main' element={<Main />}>
          <Route path='/main/result1' element={<Result1 />}></Route>
          <Route path='/main/result2/:name/:cate/:order' element={<Result2 />}></Route>
          <Route path='/main/result3' element={<Result3 />}></Route>
        </Route>
        {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
