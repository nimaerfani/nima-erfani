import React from "react"

const NavItem = ({ children }) => {
  return (
    <div
      className="navItem"
      style={{
        padding: "1rem",
        margin: "0.5rem",
        border: "thin solid black",
        borderRadius: "2",
        opacity: "0.8",
        backgroundColor: "var(--light-steel-blue)",
      }}
    >
      {children}
    </div>
  )
}

export default NavItem
