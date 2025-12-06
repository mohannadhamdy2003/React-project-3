// import TopBar from "./components/TopBar";
// import SideBar from "./components/SideBar";
// import { TableDemo } from "./components/Users";
// import { Outlet, Route, Routes } from "react-router-dom";

// export default function Dashboard() {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <SideBar className="hidden lg:block" />

//       {/* Content */}
//       <div className="flex-1 flex flex-col">
//         {/* TopBar */}
//         <TopBar />

//         {/* Page Content */}
//         <div className="p-4">
//           <Routes>
//             <Route path="users" element={<TableDemo />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { TableDemo } from "./components/Users";
import { Outlet, Route, Routes } from "react-router-dom";

export default function Dashboard() {
  return (
    <div
      className="
      grid-template-columns: 240px 1fr 1fr;
      grid-template-areas: 
        's h h'
        's d d'
        's d d';
      grid-template-rows: 720px 150px 150px; 
      
    "
    >
      {/* Topbar */}
      <div className="area-h">
        <TopBar />
      </div>
      {/* Sidebar */}
      <div className=" area-s hidden md:block bg-white border-r p-4">
        <SideBar />
      </div>

      {/* Content */}
      <div className="area-s">
        <TableDemo />
      </div>
    </div>
  );
}
