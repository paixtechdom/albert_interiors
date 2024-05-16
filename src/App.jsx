import React, { useState, useEffect, Suspense, createContext } from 'react'
import './assets/index.css';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


const HomePage = React.lazy(() => delayLoad(import('./Pages/Home/HomePage')))
const Navbar = React.lazy(() => delayLoad(import('./Components/Navbar')))
const Footer = React.lazy(() => delayLoad(import('./Components/Footer')))



function delayLoad(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() =>promise);
}

export const AppContext = createContext()

const Layout = () =>{
  const [ currentNav, setCurrentNav ] = useState(0)


  return(
    <div className='app overflow-hidden bg-orange-100'>
      <HelmetProvider>
        <AppContext.Provider value={{currentNav, setCurrentNav }}> 
          <Suspense fallback={<></>}>
            <Navbar />
          </Suspense>
            
          <Outlet />

          <Suspense fallback={<></>}>
            <Footer />
          </Suspense>

        </AppContext.Provider>

      </HelmetProvider>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Suspense fallback={
          <div className='bg-orange-100 h-screen center flex-col gap-4 w-full text-xl'>
            <h1 className='font-bold text-6xl text-orange-500 animate-bounce'>
              A.I
            </h1>
          </div>
        }>
          <HomePage /> 
        </Suspense>
      },

      {
        path: '/*',
        element: <div className='mt-9 w-full bg-gray-200 flex flex-col items-center justify-center h-96'>
        <i className="bi bi-exclamation-circle-fill text-5xl text-blue mb-3"></i>
        <p className="text-xl">
          Page not found 
        </p>

        <Link className='mt-9 text-white bg-blue p-3 text-sm px-8 rounded-xl ' to='/'>HOME PAGE</Link>
      </div>
      }
    ]
  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} /> 
    </div>
  );

}


export default App;

