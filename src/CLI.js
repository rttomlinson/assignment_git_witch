#!/usr/bin/env node

const GitWitch = require('./GitWitch');
let gitWitch = new GitWitch({});
let question = [].slice.call(process.argv, 2);

question = question.join(" ");

gitWitch.process(question)
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(`ERR: ${ err }`);
    });
