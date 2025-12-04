// import styles from "../SideBar.module.css";
// import {Link} from "react-router-dom"
// export default function SideBar() {
//   return (
//     <div
//       className="d-flex flex-column  text-white p-3 side-bar"
//       style={{
//         width: "200px",
//         height: "100vh",
//         position: "fixed",
//         marginLeft: "-200px",
//       }}
//     >
//       <h4 className="mb-4">Menu</h4>
//       <ul className="nav nav-pills flex-column mb-auto">
//         <li className="nav-item">
//           <Link to="/dashboard/users" className="nav-link text-black">
//             Home
//           </Link>
//         </li>
//         <li>
//           <a href="#" className="nav-link text-black">
//             Profile
//           </a>
//         </li>
//         <li>
//           <a href="#" className="nav-link text-black">
//             Settings
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }
import {Link} from "react-router-dom"
export default function SideBar() {
  return (
    <nav className="hidden md:block bg-white shadow-md border-r border-gray-200   h-screen fixed  left-0 min-w-[150px] py-6 px-4 ">
      <ul>
        <li>
          <a
            href="javascript:void(0)"
            className="text-slate-700 font-medium text-[15px] block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
          >
            Dashboard
          </a>
        </li>
      </ul>

      <div className="mt-4">
        <ul className="mt-2 space-y-1">
          <li>
            <Link to="/dashboard/users" className="nav-link text-black">
               Home {" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );}