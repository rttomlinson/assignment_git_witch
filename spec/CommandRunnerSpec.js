const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", function() {
  beforeEach(() => {
    this.github = {
      getRepos() {}
    };
    this.runner = new CommandRunner({
      github: this.github
    });

    this.command = {
      username: "bobby",
      subject: "repos",
      query: "details"
    };
    this.response = {
      username: "bobby",
      subject: "repos",
      query: "details",
      results: [
        {
          repo: "name",
          description: "something"
        }
      ]
    };
  });
  it("returns a response with results of objects", done => {
    this.runner.run(this.command).then(object => {
      expect(object.results).toEqual(this.response.results);
      done();
    });
  });
  xit("returns a response with results of objects", done => {
    this.runner.run(this.command).then(object => {
      expect(object.results).toEqual("repos");
      done();
    });
  });
});

// This module should take a command input—those objects returned by the QuestionParser with a username, subject, and query—and return a response object. The response object should share the username, subject, and query properties, but it should also contain a results property. If the query is "details", then the results property should be a list of objects of the given subject for the given user. So, if the subject is "repos", then it should contain a list of simple repo objects (perhaps with a name and description) property.
