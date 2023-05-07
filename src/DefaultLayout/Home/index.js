import React from "react"
import { Footer, Header } from "../../Components"
import { AuthRoute } from "../../Routes"
import { Route, Routes } from "react-router-dom"

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        {AuthRoute.map((route, index) => {
          // Handle Authentication here
          return (
            <Route
              path={route.path}
              element={route.element}
              key={index}
              exact={route.exact}
            />
          )
        })}
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default Home
