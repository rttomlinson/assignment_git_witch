function getUser(question) {
    let userExpr = new RegExp(/.*does\s(\w+)\shave\?$/, "i");
    let username = userExpr.exec(question);
    return username[1];
}

function getSubject(question) {
    let subjExpr = new RegExp(/\s*(\w+)\srepos\s.+/, "i");
    let subject = subjExpr.exec(question);
    if (subject[1] === "starred") {
        subject = "starred repos";
    }
    else {
        subject = "repos";
    }
    return subject;
}

function getQuery(question) {
    let queryExpr = new RegExp(/^(what).*/);
    let query = queryExpr.exec(question);
    if (query) {
        query = "details";
    }
    else {
        query = "count";
    }
    return query;
}

module.exports = {
    getUser,
    getSubject,
    getQuery
};
