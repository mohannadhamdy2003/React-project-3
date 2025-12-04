import { Link } from "react-router-dom";
export default function Header() {

  function logOut(){
    window.localStorage.removeItem("Email");
    window.location.pathname="/login"
  }
  return (
    <div className="container ">
      {" "}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom">
        {" "}
        <div className="col-md-3  mb-md-0"> </div>{" "}
        <ul className="nav col-12 col-md-auto  justify-content-center mb-md-0">
          {" "}
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>{" "}
          <li>
            <Link to="/about" className="nav-link px-2">
              About
            </Link>
          </li>{" "}
          <li>
            <Link to="/dashboard" className="nav-link px-2">
              Dashboard
            </Link>
          </li>{" "}
        </ul>{" "}
        {!window.localStorage.getItem("Email") ? (
          <>
            <div className="col-md-3 text-end">
              {" "}
              <Link
                to="/login"
                type="button"
                className="btn btn-outline-primary me-2"
              >
                Login
              </Link>{" "}
              <Link to="/register" type="button" className="btn btn-primary">
                Sign-up
              </Link>{" "}
            </div>{" "}
          </>
        ) : (
          <div className="col-md-3 text-end">
            {" "}
            <button className="btn btn-outline-primary me-2" onClick={logOut}>
              Logout
            </button>{" "}
          </div>
        )}
      </header>{" "}
    </div>
  );
}
