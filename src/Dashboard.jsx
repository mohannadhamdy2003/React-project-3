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
    <div className="grid grid-cols-[240px_1fr] grid-rows-[60px_1fr] h-screen">
      
      {/* TopBar */}
      <header className="col-span-2 row-start-1 row-end-2 border-b bg-white">
        <TopBar />
      </header>

      {/* Sidebar */}
      <aside className="row-span-2 row-start-1 bg-white border-r hidden md:block">
        <SideBar />
      </aside>

      {/* Content (Outlet renders here) */}
      <main className="col-start-1 col-span-2 row-start-2 p-4 overflow-auto">
        <Outlet />
      </main>

    </div>
  );
}
