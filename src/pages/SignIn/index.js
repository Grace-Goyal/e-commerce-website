import { useContext, useEffect } from "react";
// import { MyContext } from "../../App";
import Logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
const SignIn = () => {
//   const context = useContext(MyContext);
  useEffect(() => {
    // context.setisHeaderFooterShow(false);
  }, []);
  return (
    <>
      <section className="section signInPage">
        <div className="container">
          <div className="box card p-3 shadow border-0">
          <Link to={"/"}>
                  <img src={Logo} alt="logo"></img>
                </Link>
                <p className="logof">
                  <i>Greca</i>
                </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignIn;
