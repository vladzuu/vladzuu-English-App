import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store, { persistor as persister } from './store/store';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import IrregularVerbs from './components/IrregularVerbs/IrregularVerbsL5';
import MainMenu from './components/main/MainMenu';
import HeaderMain from './components/main/Header';
import PageNoFound from './components/PageNoFound/PageNoFound';
import Login from './components/Login/Login';
import ListVerbs from './components/IrregularVerbs/ListsVerbs/ListVerbs';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persister} >
          <div className="App" >
            <Routes>
              <Route path='/*' element={<HeaderMain />} />
            </Routes>
            <main>
              <Routes>
                <Route path='/IrregularVerbs' element={<IrregularVerbs />} />
                <Route path='/' element={<MainMenu />} />
                <Route path='/login' element={<Login />} />
                <Route path='/listVerbs' element={<ListVerbs />} />
                <Route path='*' element={<PageNoFound />} />
              </Routes>
            </main>
          </div>
        </PersistGate>
      </Provider >
    </BrowserRouter >
  )
}

export default App;
