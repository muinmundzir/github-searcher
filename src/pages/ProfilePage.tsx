import { useCallback, useEffect, useState } from "react";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Profile from "../components/Profile";
import ChevronLeft from "../assets/ChevronLeft.svg";
import RepoCard from "../components/RepoCard";

const ProfilePage = () => {
  let { username } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [repos, setRepos] = useState();

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

  const getUserReposAPI = useCallback(async (username: string) => {
    try {
      const result = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setRepos(result.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getUserAPI(username!);
    getUserReposAPI(username!);
  }, [username]);

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <header className="max-w-sm mx-auto p-3 m-5 rounded-md bg-gray-200 shadow-md">
        <div
          onClick={navigateBack}
          className="flex w-12 items-center gap-2 cursor-pointer hover:text-purple-400"
        >
          <img className="w-4 h-4" src={ChevronLeft} />
          <p>Back</p>
        </div>
      </header>
      {user && <Profile user={user} />}
      {repos && repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
    </>
  );
};

export default ProfilePage;
