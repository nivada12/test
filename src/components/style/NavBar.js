import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header>
        <Navbar
          style={{ height: "50px" }}
          className="justify-content-between align-align-items-center bg-dark"
        >
          <div>
            <ul
              style={{ listStyleType: "none" }}
              className=" d-flex justify-content-start"
            >
              <li>
                <a href="http://www.facebook.com">
                  <i
                    className="fab fa-facebook-f p-2"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </li>
              <li>
                <a href="http://www.instagram.com">
                  <i
                    className="fab fa-instagram p-2"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </li>
              <li>
                <a href="http://www.youtube.com">
                  <i
                    className="fab fa-youtube p-2"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
              }}
            >
              <Link className="flex-item p-2" to="/">
                Accueil
              </Link>
              <Link className="flex-item p-2" to="/Products">
                Products
              </Link>

              <div className="flex-item p-2">En savoir+</div>
              <Link className="flex-item p-2" to="/panier">
                Panier
              </Link>
            </ul>
          </div>
        </Navbar>
      </header>
    </div>
  );
}

export default NavBar;
