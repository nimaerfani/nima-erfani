import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { CSSTransition } from "react-transition-group"
import { Link } from "gatsby"

const NavItem = ({ children, bgColor }) => {
  return (
    <Link to={`#${children}`}>
      <div
        className="mx-0"
        style={{
          padding: "1rem",
          margin: "0.5rem",
          color: "whitesmoke",
          backgroundColor: bgColor,
          border: "solid 1px white",
        }}
      >
        {children}
      </div>
    </Link>
  )
}

const Nav = props => {
  const [navVisible, setNavVisible] = useState(false)
  const navItems = [
    "Education",
    "Technical Profile",
    "Experience",
    "Projects",
  ].map((value, index) => (
    <NavItem
      key={index}
      setSection={props.setSection}
      bgColor={
        value === props.section
          ? "var(--dark-purple)"
          : "var(--dark-slate-gray)"
      }
    >
      {value}
    </NavItem>
  ))
  return (
    <nav>
      <div
        style={{
          position: "fixed",
          zIndex: "100",
          right: "1.3rem",
          top: "1.3rem",
          textAlign: "center",
          width: "fit-content",
          padding: "0",
        }}
      >
        <div className="d-none d-lg-block">{navItems}</div>
        <div className="d-xs-block d-lg-none text-right">
          <CSSTransition
            in={navVisible}
            classNames="menu"
            timeout={300}
            unmountOnExit
          >
            <div>
              <Button
                onClick={() => setNavVisible(!navItems)}
                variant="outline"
              >
                <i className="far fa-window-close"></i>
              </Button>
              {navItems}
            </div>
          </CSSTransition>
          <CSSTransition
            in={!navVisible}
            classNames="menubars"
            timeout={300}
            unmountOnExit
          >
            <div>
              <Button
                onClick={() => setNavVisible(!navVisible)}
                variant="outline"
              >
                <i className="fas fa-bars"></i>
              </Button>
            </div>
          </CSSTransition>
        </div>
      </div>
    </nav>
  )
}

export default Nav
