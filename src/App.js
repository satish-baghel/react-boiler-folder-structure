import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { PublicRoute } from "./Routes"

const App = () => {
  return (
    <Router>
      <Routes>
        {PublicRoute.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={route.element}
              exact={route.exact}
              key={index}
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App
