import React, { lazy, Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientLayout from 'layouts/client';
import theme from './themes'; // Update the import statement

const Dashboard = lazy(() => import('pages/client/Dashboard'));
const MyCourses = lazy(() => import('pages/client/MyCourses'));

const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ClientLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="my-courses" element={<MyCourses />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
