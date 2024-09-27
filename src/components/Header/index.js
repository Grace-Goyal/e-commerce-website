import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.webp";
import { LiaShippingFastSolid } from "react-icons/lia";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { TfiAngleDown } from "react-icons/tfi";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              <LiaShippingFastSolid className="fs" />
              FREE SHIPPING: On orders of $85+. Use Code: GRECFREESHIP
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="logo"></img>
                </Link>
                <p className="logof">
                  <i>Greca</i>
                </p>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                <div className="headerSearch ml-3 mr-3">
                  <input type="text" placeholder="Search for Products..." />
                  <button>
                    <FaSearch />
                  </button>
                </div>

                <div className="part3 d-flex align-items-center ml-auto">
                  <button className="user">
                    <FaUserCircle />
                  </button>
                  <div className="ml-auto cartTab">
                    <div className="position-relative ml-2">
                      <button className="user">
                        <BsHandbag />
                      </button>
                      <span className="count d-flex align-items-center justify-content">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-2 navpart1">
                <div className="catWrapper">
                  <Button
                    className="allCatTab align-items-center"
                    onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
                  >
                    <span className="icon1 mr-2">
                      <IoIosMenu />
                    </span>
                    <span class="text">ALL CATEGORIES</span>
                    <span className="icon2 ml-2">
                      <TfiAngleDown />
                    </span>
                  </Button>

                  <div
                    className={`sidebarNav ${
                      isopenSidebarVal === true ? "open" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <a href="">
                          <Button>Men <FaAngleRight className="ml-auto"/></Button>
                        </a>
                        <div className="submenu">
                          <a href="">
                            <Button>clothing</Button>
                          </a>
                          <a href="">
                            <Button>Footwear</Button>
                          </a>
                          <a href="">
                            <Button>Watches</Button>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a href="">
                          <Button>Women <FaAngleRight className="ml-auto"/></Button>
                        </a>
                        <div className="submenu">
                          <a href="">
                            <Button>clothing</Button>
                          </a>
                          <a href="">
                            <Button>Footwear</Button>
                          </a>
                          <a href="">
                            <Button>Watches</Button>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a href="">
                          <Button>Beauty</Button>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <Button>Watches</Button>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <Button>Kids</Button>
                        </a>
                      </li>
                      <li>
                        <a href="Gift.html">
                          <Button>Gift</Button>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <Button>Blog</Button>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-9 navpart2 d-flex align-items-center">
                <ul className="list list-inline ml-alto ">
                  <li className="list-inline-item">
                    <a href="Home.html">
                      <Button>Home</Button>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <Button>Men</Button>
                    </a>
                    <div className="submenu shadow">
                      <a href="">
                        <Button>clothing</Button>
                      </a>
                      <a href="">
                        <Button>Footwear</Button>
                      </a>
                      <a href="">
                        <Button>Watches</Button>
                      </a>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <Button>Women</Button>
                    </a>
                    <div className="submenu shadow">
                      <a href="">
                        <Button>clothing</Button>
                      </a>
                      <a href="">
                        <Button>Footwear</Button>
                      </a>
                      <a href="">
                        <Button>Watches</Button>
                      </a>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <Button>Beauty</Button>
                    </a>
                    <div className="submenu shadow">
                      <a href="">
                        <Button>clothing</Button>
                      </a>
                      <a href="">
                        <Button>Footwear</Button>
                      </a>
                      <a href="">
                        <Button>Watches</Button>
                      </a>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <Button>Watches</Button>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <Button>Kids</Button>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="Gift.html">
                      <Button>Gift</Button>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <Button>Blog</Button>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <Button>Contact Us</Button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
