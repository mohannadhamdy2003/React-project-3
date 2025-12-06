import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function TableDemo() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  async function deleteUser(id){
    await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
  }

  // console.log(user);
  // console.log(user); // will print the data after fetch

  return (
    <Table className=" ">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="">
        <TableRow>
          <TableHead className="text-center">Id</TableHead>
          <TableHead className="text-center">Users</TableHead>
          <TableHead className="text-center">Email</TableHead>
          <TableHead className="text-center">A</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => {
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Link to={`${user.id}`}>
                  <i className="fa-regular fa-pen-to-square text-blue-400 cursor-pointer "></i>
                </Link>
                <i
                  className="fa-solid fa-trash text-red-600 mx-9 cursor-pointer"
                  onClick={() => deleteUser(user.id)}
                ></i>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
