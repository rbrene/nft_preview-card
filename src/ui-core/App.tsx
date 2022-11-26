import React, { Suspense, lazy } from 'react';
import Loader from '../components/Progressbar';


const Routes = lazy(() => import('../routes/Routes'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </>
  );
}

export default App;
