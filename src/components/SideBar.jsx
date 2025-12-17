
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom"
export default function SideBar() {
  const {pathname}=useLocation()
  // useEffect(() => {
  //   console.log(pathname);
  // }, [pathname]);
  return (
    <nav className=" hidden   lg:w-[150px] 2xl:block  bg-white shadow-md border-r border-gray-200   h-screen fixed  left-0  py-6 px-4  ">
      <div className="mt-4 -ml-10">
        <ul className="mt-2 space-y-4 ">
          <li>
            {/* <a className="text-slate-700 font-medium text-[15px] block hover:text-slate-900 hover:bg-gray-100 rounded transition-all">
              Dashboard
            </a> */}
          </li>
          <li>
            <Link
              to="/dashboard/users"
              className={` font-medium text-[15px] block hover:text-orange-500
             hover:bg-gray-100 rounded transition-all 
             ${
               pathname === "/dashboard/users"
                 ? "text-red-500 border-b-2 border-red-500"
                 : "text-slate-700 "
             }`}
            >
              <i className="fa-solid fa-user-group"></i> Users
            </Link>

            <br />
            <Link
              to="/dashboard/users/create"
              className={` font-medium text-[15px] block  hover:text-orange-500 
                hover:bg-gray-100 rounded transition-all 
                ${
                  pathname === "/dashboard/users/create"
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-slate-700 "
                }`}
            >
              <i className="fa-solid fa-user-plus"></i> New Users{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );}
