import { useCallback, useEffect, useState } from "react";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Profile from "../components/Profile";
import ChevronLeft from "../assets/ChevronLeft.svg";

const ProfilePage = () => {
  let { username } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const getUserAPI = useCallback(async (username: string) => {
    try {
      const result = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(result.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getUserAPI(username!);
  }, [username]);

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <header className="max-w-sm mx-auto p-3 m-5 rounded-md bg-gray-200 shadow-md">
        <div
          onClick={navigateBack}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img className="w-4 h-4" src={ChevronLeft} />
          <p>Back</p>
        </div>
      </header>
      {user && <Profile user={user} />}
    </>
  );
};

export default ProfilePage;
