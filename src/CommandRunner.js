const GithubWrapper = require("./GithubWrapper");

function CommandRunner({
    github
}) {
    this.github = github || new GithubWrapper({});

    this.run = async function(command) {
        let gitData = await this.github.getRepos(command);
        gitData = this.scrubData(gitData.data);
        command.results = gitData;
        return command;
    };

    this.scrubData = function(data) {
        return data.map((repo) => {
            let newObj = {};
            newObj.name = repo.name;
            newObj.description = repo.description;
            return newObj;
        });
    }
}

module.exports = CommandRunner;
