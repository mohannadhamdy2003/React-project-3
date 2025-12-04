import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { TableDemo } from "./components/Users";

export default function Dashboard() {
  return (
    <div className="relative ">
      <TopBar />
      <SideBar />
      <TableDemo />
    </div>
  );
}
