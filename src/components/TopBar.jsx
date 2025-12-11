import { Link } from "react-router-dom";
export default function TopBar() {
  return (
    <div className="container ">
      {" "}
      <header className="flex flex-wrap align-items-center justify-content-center justify-content-md-between    ">
        <h1 className=""style={{ }}>Store</h1>{" "}
        <div className="col-md-3  mb-md-0"> </div>{" "}
        <ul className="nav col-12 col-md-auto  justify-content-center mb-md-0">
          {" "}
          <li>
            <Link
              to="/"
              //   className="nav-link px-2 link-secondary"
              type="button"
              className="btn btn-outline-primary me-2"
            >
              Go to website
            </Link>
          </li>{" "}
        </ul>{" "}
      </header>
    </div>
  );
}
