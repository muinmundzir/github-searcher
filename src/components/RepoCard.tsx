import repoIcon from "../assets/repo.svg";

const RepoCard = ({ repo }) => {
  return (
    <article
      key={repo.id}
      className="max-w-sm mx-auto rounded-md shadow-md bg-gray-200 p-2 mb-4 hover:scale-105 duration-75 cursor-pointer"
    >
      <div className="flex items-center gap-1 mb-2">
        <img className="w-4 h-4" src={repoIcon} />
        <a
          href={repo.html_url}
          className="text-lg font-bold inline-block hover:text-purple-400 duration-75"
          target={"_blank"}
        >
          {repo.name}
        </a>
      </div>
      <p className="text-sm">{repo.description ?? "*No Description*"}</p>
    </article>
  );
};

export default RepoCard;
