interface ProfileProps {}

const Profile = ({ user }) => {
  return (
    <article className="max-w-sm mx-auto rounded-md shadow-md bg-gray-200 mb-4">
      <div className="p-4 pb-0 mb-4 flex gap-4">
        <img
          className="h-20 w-20 rounded-md"
          src={user?.avatar_url!}
          alt="users avatar"
        />
        <div>
          <h2 className="text-normal">@{user.login!}</h2>
          <p className="text-sm">{user.bio}</p>
        </div>
      </div>
      <section className="p-4 flex items-center justify-between border-t-2 border-t-black">
        <div className="flex flex-col items-center justify-center">
          <a
            href={`https://api.github.com/users/${user.login}/following`}
            className="text-sm"
          >
            Following
          </a>
          <p className="text-sm">{user.following}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a href={user.followers_url} className="text-sm">
            Followers
          </a>
          <p className="text-sm">{user.followers}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a href={user.repos_url} className="text-sm">
            Repos
          </a>
          <p className="text-sm">{user.public_repos}</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-center">
          <a
            href={`https://api.github.com/users/${user.login}/gists`}
            className="text-sm"
          >
            Gists
          </a>
          <p className="text-sm">{user.public_gists}</p>
        </div>
      </section>
    </article>
  );
};

export default Profile;
