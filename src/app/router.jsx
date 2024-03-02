import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/mainPage/mainPAge.jsx';
import { NoPage } from '../pages/NoPAge/NoPAge.jsx';
import { TestPage } from '../pages/testPAge/testPAge.jsx';
import { ResultPage } from '../pages/ResultPage/ResultPAge.jsx';

// import { SignUp } from '../pages/SignupPage/SignUp.jsx';
// import { LoginPage } from '../pages/loginPage/loginPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>
  },
  // {
  //   path: '/login',
  //   element: <LoginPage />
    
  // },
  // {
  //   path: '/registration',
  //   element: <SignUp />
  // },
    
  {
    path: '/test',
    element: <TestPage />
  },
  {
    path: '/result',
    element: <ResultPage />
  },
  {
    path: '/*',
    element: <NoPage />
  }
])