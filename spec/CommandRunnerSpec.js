const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", function() {
    beforeEach(() => {
        this.github = {
            getRepos() {
                let results = {
                    username: "bobby",
                    repos: [{
                        name: "proj1",
                        stars: 0
                    }, {
                        name: "proj2",
                        stars: 0
                    }],
                    starredRepos: [{
                        name: "projstar1",
                        stars: 5
                    }, {
                        name: "projstar2",
                        stars: 5
                    }, {
                        name: "projstar3",
                        stars: 5
                    }]
                };
                return results;
            }
        };
        this.runner = new CommandRunner({
            github: this.github
        });
    });
    it("returns a response subject repos and query details", done => {
        let command = {
            username: "bobby",
            subject: "repos",
            query: "details"
        };
        let response = {
            username: "bobby",
            subject: "repos",
            query: "details",
            results: [{
                name: "proj1",
                stars: 0
            }, {
                name: "proj2",
                stars: 0
            }]
        };
        this.runner.run(command).then(result => {
            expect(result).toEqual(response);
            done();
        });
    });
    it("returns a response subject repos and query count", done => {
        let command = {
            username: "bobby",
            subject: "repos",
            query: "count"
        };
        let response = 2;
        this.runner.run(command).then(result => {
            expect(result.results).toEqual(2);
            done();
        });
    });
    it("returns a response subject starred repos and query count", done => {
        let command = {
            username: "bobby",
            subject: "starred repos",
            query: "count"
        };
        let response = 3;
        this.runner.run(command).then(result => {
            expect(result.results).toEqual(3);
            done();
        });
    });
    it("returns a response subject starred repos and query count", done => {
        let command = {
            username: "bobby",
            subject: "starred repos",
            query: "details"
        };
        let response = {
            username: "bobby",
            subject: "starred repos",
            query: "details",
            results: [{
                name: "projstar1",
                stars: 5
            }, {
                name: "projstar2",
                stars: 5
            }, {
                name: "projstar3",
                stars: 5
            }]
        };
        this.runner.run(command).then(result => {
            expect(result).toEqual(response);
            done();
        });
    });
});

// This module should take a command input—those objects returned by the QuestionParser with a username, subject, and query—and return a response object. The response object should share the username, subject, and query properties, but it should also contain a results property. If the query is "details", then the results property should be a list of objects of the given subject for the given user. So, if the subject is "repos", then it should contain a list of simple repo objects (perhaps with a name and description) property.
