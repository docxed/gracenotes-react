import React, { useState } from "react"
import { Link } from "react-router-dom"
import brand from "../assets/logo.png"

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  if (isLoggedIn) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src={brand}
                width={30}
                height={30}
                className="d-inline-block align-text-top"
              />

              <b className="ms-2">Gracenotes</b>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="fa-solid fa-house" /> หน้าแรก
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mygraces">
                    <i className="fa-solid fa-file-pen" />{" "}
                    บันทึกความดีกิจกรรมเพื่อสังคมและสาธารณะประโยชน์
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reports">
                    <i className="fa-solid fa-bug" /> รายงานปัญหา
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  } else {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src={brand}
                width={30}
                height={30}
                className="d-inline-block align-text-top"
              />

              <b className="ms-2">Gracenotes</b>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent2"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent2"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    ลงชื่อเข้าใช้
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    สมัครสมาชิก
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
export default Nav
