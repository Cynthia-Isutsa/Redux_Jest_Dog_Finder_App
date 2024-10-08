import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const users = useSelector((state: any) => state.users);
  console.log(users);
  

  return (
    <div className="container">
      <h2>Dog App here we come</h2>
      <Link className="btn btn-success my-3" to="/create">Create +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                <Link className="btn btn-sm btn-primary" to={`/update/${user.id}`}>Update </Link>
                    {/* <button className="btn btn-sm btn-primary">Edit</button> */}
                    <button  className="btn btn-sm btn-danger ms-2">Delete</button>
                </td>
               
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
