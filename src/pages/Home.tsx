import {
  ChangeEvent,
  Fragment,
  KeyboardEvent,
  useCallback,
  useState,
} from "react";

import axios from "axios";

import UserCard from "../components/UserCard";

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState();

  const getUsersAPI = useCallback(
    async (keyword: string) => {
      try {
        const result = await axios.get(
          `https://api.github.com/search/users?q=${keyword}`
        );
        console.log(result);
        setUsers(result.data.items);
      } catch (err) {
        console.log(err);
      }
    },
    [query]
  );

  const handleSearch = useCallback(
    function (e: KeyboardEvent<HTMLInputElement>) {
      if (e.key === "Enter") {
        getUsersAPI(query);
      }
    },
    [getUsersAPI]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <Fragment>
      <header className="max-w-sm mx-auto p-3 m-5 rounded-md bg-gray-200 shadow-md">
        <input
          className="p-2 w-full rounded-md"
          type="text"
          name="input"
          onKeyDown={handleSearch}
          onChange={handleChange}
          placeholder="Search user.."
        />
      </header>
      {users && users?.map((user) => <UserCard key={user.id} user={user} />)}
    </Fragment>
  );
};

export default Home;
