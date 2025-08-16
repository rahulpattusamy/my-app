import Link from "next/link";
import { sort } from "fast-sort";
interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const Userpage = async ({ sortOrder }: Props) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await data.json();
  const sortedUser = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <div className="flex p-5  gap-3 items-center justify-center ">
      <div>
        <Link href="\user?sortOrder=name">Name</Link>
        {sortedUser.map((user) => (
          <ul key={user.id}>
            <li key={user.id}> {user.name}</li>
          </ul>
        ))}
      </div>

      <div>
        <Link href="\user?sortOrder=email">Email</Link>

        {sortedUser.map((user) => (
          <ul key={user.id}>
            <li key={user.id}> {user.email}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Userpage;
