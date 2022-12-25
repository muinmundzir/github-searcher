const RepoCard = ({ repo }) => {
  return (
    <article
      key={repo.id}
      className="max-w-sm mx-auto rounded-md shadow-md bg-gray-200 p-2 mb-4 hover:scale-105 duration-75 cursor-pointer"
    >
      <a
        href={repo.html_url}
        className="text-lg font-bold inline-block mb-2 hover:text-purple-400 duration-75"
        target={"_blank"}
      >
        {repo.name}
      </a>
      <p className="text-sm">{repo.description ?? "*No Description*"}</p>
    </article>
  );
};

export default RepoCard;
