const Github = require('github');

//Could have github config files

class GithubWrapper {
    constructor({
        github
    }) {
        this.github = github || new Github({
            Promise: require('bluebird')
        });
    }

    async getRepos(command) {
        let results;
        if (command.subject === 'starred repos') {
            results = await this.getStarredRepos(command);
        }
        else {
            results = await this.getRepos(command);
        }
        return results;

    }

    async getRepos(command) {
        return await this.github.repos.getForUser({
            username: command.username
        });
    }

    async getStarredRepos(command) {
        return await this.github.activity.getStarredReposForUser({
            username: command.username
        });
    }


}
module.exports = GithubWrapper;
