import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "./UserReducer";


const Update = () => {
    const {id} = useParams()
    const users = useSelector((state: any) => state.users);
    const existingUser = users.filter((user: any) => 
      //console.log({user})
      user?.id == id
    )
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {email, name} = existingUser[0]
    const [nameUpdate, setNameUpdate] = useState<any>(name);
    const [emailUpdate, setEmailUpdate] = useState<any>(email);
    const handleUpdate=(e: any) => {
      e.preventDefault()
      dispatch(updateUser({
        id: id, 
        name: nameUpdate,
        email: emailUpdate}))
      navigate('/')

  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form  onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={nameUpdate}
              className="form-control"
              placeholder="enter name"
              onChange={(e: any) => setNameUpdate(e.target.value) }
             
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={emailUpdate}
              className="form-control"
              placeholder="enter email"
            onChange={(e: any) => setEmailUpdate(e.target.value) }
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Update