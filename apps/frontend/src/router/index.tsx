import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Router
