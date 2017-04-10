function CommandRunner() {
    this.run = function(command) {
        return new Promise(resolve => {
            resolve(command);
        });
    };
}

module.exports = CommandRunner;
