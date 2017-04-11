const CommandRunner = require("./CommandRunner");
const QuestionParser = require("./QuestionParser");
const ResponseFormatter = require("./ResponseFormatter");

class GitWitch {
    constructor({
        parser,
        runner,
        formatter
    }) {
        this.parser = parser || new QuestionParser();
        this.runner = runner || new CommandRunner({});
        this.formatter = formatter || new ResponseFormatter();
    }
    async process(input) {
        let command = this.parser.parse(input);
        let response = await this.runner.run(command);
        let output = this.formatter.format(response);
        return output;
    }
}


module.exports = GitWitch;
