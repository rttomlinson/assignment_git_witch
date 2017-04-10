const {
  getUser,
  getSubject,
  getQuery
} = require("./services/question_parser/regex.js");

function QuestionParser() {
  this.parse = function(question) {
    let username = getUser(question);
    let subject = getSubject(question);
    let query = getQuery(question);
    return {
      username: username,
      subject: subject,
      query: query
    };
  };
  return this;
}

module.exports = QuestionParser;
