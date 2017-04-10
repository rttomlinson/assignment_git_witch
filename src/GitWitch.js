class GitWitch {
    constructor({
        parser,
        runner,
        formatter
    }) {
        this.parser = parser;
        this.runner = runner;
        this.formatter = formatter;
    }
    async process(input) {
        let command = this.parser.parse(input);
        let response = await this.runner.run(command);
        let output = this.formatter.format(response);
        return output;
    }
}


module.exports = GitWitch;
