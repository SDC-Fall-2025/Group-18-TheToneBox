import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom'
import ErrorFallback from '../components/ErrorFallback'
import LoadingFallback from '../components/LoadingFallback'

// Router Error Boundary wrapper component
function RouterErrorBoundary() {
  const error = useRouteError() as Error;
  return <ErrorFallback error={error} resetErrorBoundary={() => window.location.reload()} />;
}

// lazy load
const MainLayout = lazy(() => import('../components/layout/MainLayout/MainLayout'))
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Creator = lazy(() => import('../pages/Creator'))
const Extraction = lazy(() => import('../pages/Extraction'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RouterErrorBoundary />,

    // children works similar like switch-case with breaks
    children: [
      // the root index
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'creator',
        element: <Creator />
      },
      {
        path: 'extraction',
        element: <Extraction />
      },
      // go to Not Found page if the route matches nothing
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

// router component
export function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Router
