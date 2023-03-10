import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/users/${user.login}`);
  return (
    <article
      onClick={handleNavigate}
      className="max-w-sm mx-auto rounded-md shadow-md bg-gray-200 mb-4 cursor-pointer hover:scale-105 duration-75"
    >
      <div className="p-4 mb-4 flex items-center gap-4">
        <img
          className="h-5 w-5 rounded-full"
          src={user?.avatar_url!}
          alt="users avatar"
        />
        <div>
          <h2 className="text-normal">@{user.login!}</h2>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
