//import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { lazy, Suspense } from 'react';
import { CitiesProvider } from './context/CitiesContext';
import { AuthProvider } from './context/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import MapForm from './components/MapForm';
import SpinnerFullPage from './components/SpinnerFullPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0
    }
  }
});

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import MapAppLayout from "./pages/MapAppLayout";
// import PageNotFound from "./pages/PageNotFound";

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const DashBoard = lazy(() => import('./pages/DashBoard'));
const Login = lazy(() => import('./pages/Login'));
const AppLayout = lazy(() => import('./ui/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  //const [date, setDate] = useState(new Date());
  //const [notes, setNotes] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route index element={<Navigate replace to="homepage" />} />
                <Route path="homepage" element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="mapform" element={<MapForm />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

/*
<Route path="/" element={<Homepage />} />
===
<Route index element={<Homepage />} />
*/
export default App;

/*
   CitiesProvider    // value = {{cities, isLoading}} to the component tree
     Context.Provider
        BrowserRouter
           Router
              Navigation.Provider
                Location.Provider
                  Routes
                    RenderdRoute
                      Route.Provider
                         Homepage
                ***
*/

/*
<GlobalStyles />
<BrowserRoutes>
  <Routes>
    <Route element={<AppLayout />}/>
    <Route index element={<Navigate replace to ="dashboard" />} />
    <Route path="dashboard" element={<Dashboard />} />
  </Routes>
</BrowserRoutes>
*/
