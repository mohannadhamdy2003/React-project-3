
import {Link} from "react-router-dom"
export default function SideBar() {
  return (
    <nav className=" hidden   lg:w-[150px] 2xl:block  bg-white shadow-md border-r border-gray-200   h-screen fixed  left-0  py-6 px-4  ">
      <div className="mt-4 -ml-10">
        <ul className="mt-2 space-y-4 ">
          <li>
            <a className="text-slate-700 font-medium text-[15px] block hover:text-slate-900 hover:bg-gray-100 rounded transition-all">
              Dashboard
            </a>
          </li>
          <li>
            <Link to="/dashboard/users" className="nav-link text-black">
              Users{" "}
            </Link>
            <Link to="/dashboard/users/create" 
            className="nav-link text-black text">
              New Users{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );}
