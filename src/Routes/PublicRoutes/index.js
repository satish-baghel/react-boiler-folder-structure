import { Home } from "../../DefaultLayout"
import { Login } from "../../Pages"

const PublicRoute = [
  {
    path: "/login",
    element: <Login />,
    exact: true,
  },
  {
    path: "*",
    element: <Home />,
    exact: false,
  },
]

export default PublicRoute
