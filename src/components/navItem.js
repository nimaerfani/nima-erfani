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
        opacity: "0.85",
        backgroundColor: "var(--dark-slate-gray)",
        color: "whitesmoke",
      }}
    >
      {children}
    </div>
  )
}

export default NavItem
