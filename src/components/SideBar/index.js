import './index.css'
import React from 'react'
import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";

function SocialMediaArea() {
  return (
    <div className="socialarea">
      <a href="/">
        <FiGithub />
      </a>
      <a href="/">
        <FiInstagram />
      </a>
      <a href="/">
        <FiTwitter />
      </a>
    </div>
  )

}

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <img src="https://github.com/gustavohernandes11.png" alt="logo" className="imglogo" />
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi nec sollicitudin velit, non eleifend tortor. Proin laoreet est non turpis faucibus interdum. Fusce nisi eros, lobortis eget tellus nec, consectetur ullamcorper diam.</p>
        <SocialMediaArea />
      </div>
    </>
  )
}