function CommandRunner({
    github
}) {
    this.github = github;
    this.run = function(command) {
        return new Promise(resolve => {
            command = this.github.getRepos(command);
            resolve(command);
        });
    };
}

module.exports = CommandRunner;
