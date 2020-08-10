import React, { useEffect } from "react"

const ScrollTracker = ({ children, section, setSection }) => {
  const navItems = [
    "Banner",
    "Education",
    "Skills",
    "Experience",
    "Projects",
    "Footer",
  ]
  const checkIfInSection = () => {
    navItems.forEach(value => {
      if (
        document.getElementById(value).getBoundingClientRect().top < 250 &&
        document.getElementById(value).getBoundingClientRect().bottom > 250 &&
        value !== section
      ) {
        setSection(value)
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", checkIfInSection)
    return () => window.removeEventListener("scroll", checkIfInSection)
  })

  return <>{children}</>
}

export default ScrollTracker
