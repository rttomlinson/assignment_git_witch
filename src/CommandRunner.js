const filterResponseObject = require("./services/command_runner/responseHandler");

function CommandRunner(
  {
    github
  }
) {
  this.github = github;

  this.run = function(command) {
    return new Promise(resolve => {
      let responseObject = this.github.getRepos(command);
      command.results = filterResponseObject(command, responseObject);
      resolve(command);
    });
  };
}

module.exports = CommandRunner;
