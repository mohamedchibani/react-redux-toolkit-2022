import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  return (
    <>
      <h1>List of users</h1>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <button
              onClick={() =>
                dispatch({ type: "user/deleteUser", payload: user.id })
              }
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
};

export default Users;
