import React from "react"

const Navbar = () => {
  return (
    <div id="navbar" className="p-3">
      <div style={{ width: "70%" }}>
        <h2 style={{ margin: 0 }}>Nima Erfani</h2>
      </div>
      <div style={{ width: "30%", textAlign: "right" }}>
        <input type="button" value="Contact Me" className="navButton" />
      </div>
    </div>
  )
}

export default Navbar
