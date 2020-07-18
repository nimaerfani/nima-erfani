import React from "react"
import NavItem from "./navItem"
import { Button } from "react-bootstrap"

class Nav extends React.Component {
  state = {
    navVisible: true,
  }

  setNavVisible = () => {
    this.state.navVisible
      ? this.setState({ navVisible: false })
      : this.setState({ navVisible: true })
  }

  render() {
    const navItems = [
      "Education",
      "Technical Profile",
      "Experience",
      "Projects",
    ].map((value, index) => <NavItem>{value}</NavItem>)
    return (
      <div
        style={{
          position: "fixed",
          zIndex: "100",
          right: "2rem",
          top: "2rem",
          textAlign: "center",
          width: "fit-content",
          padding: "0",
        }}
      >
        <div className="d-none d-lg-block">{navItems}</div>
        <div className="d-xs-block d-lg-none text-right">
          <div>
            <Button
              onClick={this.setNavVisible}
              variant="outline"
              style={{
                display: this.state.navVisible ? "none" : "inline-block",
              }}
            >
              <i className="far fa-window-close"></i>
            </Button>
          </div>
          <div
            style={{
              display: this.state.navVisible ? "none" : "block",
              textAlign: "center",
            }}
          >
            {navItems}
          </div>
          <div>
            <Button
              onClick={this.setNavVisible}
              variant="outline"
              style={{
                display: this.state.navVisible ? "block" : "none",
              }}
            >
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
