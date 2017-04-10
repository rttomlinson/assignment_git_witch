const QuestionParser = require("../src/QuestionParser");

describe("QuestionParser", () => {
  beforeEach(() => {
    this.parser = new QuestionParser();
  });

  describe("parsing usernames", () => {
    it("parses simple usernames", () => {
      const question = "what repos does griselda have?";
      const command = this.parser.parse(question);
      expect(command.username).toEqual("griselda");
    });

    it("parses out usernames with numbers", () => {
      const question = "what repos does brunhilde55 have?";
      const command = this.parser.parse(question);
      expect(command.username).toEqual("brunhilde55");
    });
  });

  describe("parsing subjects", () => {
    it("parses repo subjects", () => {
      const question = "what repos does griselda have?";
      const command = this.parser.parse(question);
      expect(command.subject).toEqual("repos");
    });

    it("parses starred repo subjects", () => {
      const question = "what starred repos does griselda have?";
      const command = this.parser.parse(question);
      expect(command.subject).toEqual("starred repos");
    });
  });

  describe("parsing queries", () => {
    it("parses details queries", () => {
      const question = "what repos does griselda have?";
      const command = this.parser.parse(question);
      expect(command.query).toEqual("details");
    });

    it("parses count queries", () => {
      const question = "how many repos does brunhilde55 have?";
      const command = this.parser.parse(question);
      expect(command.query).toEqual("count");
    });
  });
});
