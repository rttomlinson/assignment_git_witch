class ResponseFormatter {
    constructor() {

    }
    format(input) {
        if (input) {
            //build results string out of .results if query is details
            let message;
            if (input.query === 'details') {
                message = input.username + "'s ";
                if (input.subject === "starred repos") {
                    message += "starred ";
                }
                message += "repos\n";
                input.results.forEach(function(repo) {
                    message += (repo.name + " - ");
                    message += (repo.description);
                    message += "\n";
                });
            }
            if (input.query === 'count') {
                let num = input.results.length;
                message = input.username + " has";
                if (input.subject === "starred repos") {
                    message += " starred"
                }
                message += " " + num + " repos";
            }
            return message;

        }
        else {
            return "";

        }
    }
}
module.exports = ResponseFormatter;
