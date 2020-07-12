import React, { useState } from "react"
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
      "Intro",
      "Education",
      "Skills",
      "Experience",
      "Projects",
    ].map((value, index) => <NavItem>{value}</NavItem>)
    return (
      <div
        style={{
          position: "fixed",
          zIndex: "100",
          right: ".5rem",
          top: "8rem",
          textAlign: "center",
          width: "fit-content",
        }}
      >
        <div className="d-none d-md-block">{navItems}</div>
        <div className="d-xs-block d-md-none text-right">
          <Button
            onClick={this.setNavVisible}
            variant="outline"
            style={{
              display: this.state.navVisible ? "none" : "inline-block",
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </Button>
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
              <i className="fas fa-chevron-left"></i>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
