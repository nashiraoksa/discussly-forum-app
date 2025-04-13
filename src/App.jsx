import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/main/Navigation';
import Footer from './components/main/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import LeaderboardPage from './pages/LeaderboardPage';
import NewThreadPage from './pages/NewThreadPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  return (
    <>
      <div className='relative w-full h-auto flex flex-col justify-between overflow-y-auto'>
        <header className='relative w-full'>
          <Navigation authUser={authUser !== null && authUser} signOut={onSignOut} />
          <div className='absolute top-0 w-full h-[30vh] bg-[#373F51] -z-10'></div>
        </header>
        <main className='h-auto min-h-[90vh] mt-20 mb-5'>
          <Routes>
            <Route path='/' element={<HomePage authUser={authUser} />} />
            <Route path='/thread/:id' element={<DetailPage />} />
            <Route path='/new' element={<NewThreadPage />} />
            <Route path='/leaderboard' element={<LeaderboardPage />} />
            {authUser === null && (
              <>
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
              </>
            )}
            <Route
              path='*'
              element={
                <div className='w-full h-screen flex justify-center items-center text-2xl font-semibold'>
                  404 NOT FOUND
                </div>
              }
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
