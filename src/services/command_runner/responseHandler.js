function filterResponseObject(command, responseObject) {
  let results;
  switch (command.subject) {
    case "repos":
      if (command.query === "count") {
        results = responseObject.repos.length;
      } else if (command.query === "details") {
        results = responseObject.repos;
      }
      break;
    case "starred repos":
      if (command.query === "count") {
        results = responseObject.starredRepos.length;
      } else if (command.query === "details") {
        results = responseObject.starredRepos;
      }
      break;
    default:
      break;
  }
  return results;
}

module.exports = filterResponseObject;
