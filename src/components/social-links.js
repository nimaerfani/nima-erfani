import React, { useState, useRef } from "react"
import { Tooltip, Overlay } from "react-bootstrap"
import { isMobile } from "react-device-detect"

const MySocialLink = props => {
  const [show, setShow] = useState(false)
  const target = useRef(null)
  return (
    <>
      <Overlay target={target} show={show}>
        <Tooltip>{props.message}</Tooltip>
      </Overlay>
      <a
        href={props.URL}
        target="blank"
        className={isMobile ? "noFocus" : "hoverLight"}
        onMouseEnter={() => {
          if (isMobile) return
          else setShow(!show)
        }}
        onMouseLeave={() => {
          if (isMobile) return
          else setShow(!show)
        }}
        ref={target}
        style={{ color: "#5c5c8a" }}
      >
        {props.children}
      </a>
    </>
  )
}

const SocialLinks = () => {
  return (
    <span style={{ fontSize: "2rem" }}>
      <MySocialLink message="Contact me @uvic.ca" URL="mailto:erfani@uvic.ca">
        <i className="fas fa-envelope low-margin"></i>
      </MySocialLink>
      <MySocialLink
        message="Find me on LinkedIn"
        URL="https://www.linkedin.com/in/nima-erfani"
      >
        <i className="fab fa-linkedin-in low-margin"></i>
      </MySocialLink>
      <MySocialLink
        message="Find me on Facebook (must be logged in)"
        URL="https://www.facebook.com/nima.erfani.3"
      >
        <i className="fab fa-facebook-f low-margin"></i>
      </MySocialLink>
    </span>
  )
}

export default SocialLinks
