const Profile = ({ user }) => {
  const ProfileContext = ({ href, total, text }) => (
    <div className="flex flex-col items-center justify-center">
      <a href={href} className="text-sm">
        {text}
      </a>
      <p className="text-sm">{total}</p>
    </div>
  );

  return (
    <article className="max-w-sm mx-auto rounded-md shadow-md bg-gray-200 mb-4">
      <div className="p-4 pb-0 mb-4 flex gap-4">
        <img
          className="h-20 w-20 rounded-full"
          src={user?.avatar_url!}
          alt="users avatar"
        />
        <div>
          <h2 className="text-normal">@{user.login!}</h2>
          <p className="text-sm">{user.bio}</p>
        </div>
      </div>
      <section className="p-4 flex items-center justify-between border-t-2 border-t-black">
        <ProfileContext
          href={`https://api.github.com/users/${user.login}/following`}
          total={user.following}
          text="Followings"
        />
        <ProfileContext
          href={user.followers_url}
          total={user.followers}
          text="Followers"
        />
        <ProfileContext
          href={user.repos_url}
          total={user.public_repos}
          text="Repositories"
        />
        <ProfileContext
          href={`https://api.github.com/users/${user.login}/gists`}
          total={user.public_gists}
          text="Gists"
        />
      </section>
    </article>
  );
};

export default Profile;
