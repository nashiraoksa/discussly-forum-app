import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/main/Navigation';
import Footer from './components/main/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import LeaderboardPage from './pages/LeaderboardPage';

function App() {
  const [authUser, setAuthUser] = useState({
    id: 'user-Leo0KyEL2PsiZ47Z',
    name: 'nashira oksani',
    email: 'test16@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=test16&background=random',
  });

  const signOut = () => {
    setAuthUser({});
  };

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-between overflow-y-auto'>
        <header className='relative w-full'>
          <Navigation authUser={authUser} signOut={signOut} />
          <div className='absolute top-0 w-full h-[30vh] bg-[#373F51] -z-10'></div>
        </header>
        <main className='min-h-[90vh]'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/thread/:id' element={<DetailPage />} />
            <Route path='/leaderboard' element={<LeaderboardPage />} />
            {!authUser.id && (
              <>
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
              </>
            )}
            <Route path='*' element={<div>404 NOT FOUND</div>} />
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
