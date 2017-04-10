function GitWitch({
    parser,
    runner,
    formatter
}) {
    this.process = function(input) {
        return new Promise((resolve, reject) => {
            let command = parser.parse(input);
            let proResponse = runner.run(command);
            proResponse.then((response) => {
                return formatter.format(response);
            }).then((output) => {
                resolve(output);
            });
        });
    };
}


module.exports = GitWitch;
