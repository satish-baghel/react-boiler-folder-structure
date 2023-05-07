import { Banner } from "../../Components"
import { User } from "../../Pages"

const AuthRoute = [
  {
    path: "/",
    element: <Banner />,
  },
  {
    path: "/user",
    element: <User />,
  },
]

export default AuthRoute
