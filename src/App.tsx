import { Fragment, useCallback, useEffect, useState } from "react";

import axios from "axios";
import Profile from "./components/Profile";

function App() {
  const [users, setUsers] = useState();

  const getUsersAPI = useCallback(async () => {
    try {
      const result = await axios.get(
        "https://api.github.com/users/muinmundzir"
      );
      console.log(result);
      setUsers(result.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getUsersAPI();
  }, []);

  return (
    <Fragment>
      <header className="max-w-sm mx-auto p-3 m-5 rounded-md bg-gray-200 shadow-md">
        <input
          className="p-2 w-full rounded-md"
          type="text"
          name="input"
          placeholder="Search user.."
        />
      </header>
      {users && <Profile users={users} />}
    </Fragment>
  );
}

export default App;
