const ResponseFormatter = require('../src/ResponseFormatter');

describe("ResponseFormatter", () => {
    describe("format function", function() {
        beforeEach(function() {
            this.formatter = new ResponseFormatter();
        });
        it("returns a empty string if called with no data", function() {
            expect(this.formatter.format()).toEqual("");
        });
        it("returns a string for subject repos and query details", function() {
            let input = {
                username: "bobby",
                subject: "repos",
                query: "details",
                results: [{
                    name: "projstar1",
                    description: "hjkshdjkfhajd"

                }, {
                    name: "projstar2",
                    description: "hjkshdjkfhajd"

                }]
            };
            expect(this.formatter.format(input)).toEqual("bobby's repos\nprojstar1 - hjkshdjkfhajd\nprojstar2 - hjkshdjkfhajd\n");
        });
        it("returns a string for subject repos and query details", function() {
            let input = {
                username: "gris",
                subject: "starred repos",
                query: "count",
                results: [{
                    name: "projstar1",
                    description: "hjkshdjkfhajd"

                }, {
                    name: "projstar2",
                    description: "hjkshdjkfhajd"

                }, {
                    name: "projstar4",
                    description: "hjkshdjkfhajd"

                }]
            };
            expect(this.formatter.format(input)).toEqual("gris has starred 3 repos");
        });
        it("returns a string for subject repos and query count", function() {
            let input = {
                username: "gris",
                subject: "repos",
                query: "count",
                results: [{
                    name: "projstar1",
                    description: "hjkshdjkfhajd"

                }, {
                    name: "projstar2",
                    description: "hjkshdjkfhajd"

                }, {
                    name: "projstar4",
                    description: "hjkshdjkfhajd"

                }]
            };
            expect(this.formatter.format(input)).toEqual("gris has 3 repos");
        });
        it("returns a string for subject starred repos and query details", function() {
            let input = {
                username: "gris",
                subject: "starred repos",
                query: "details",
                results: [{
                    name: "projstar1",
                    description: "hjkshdjkfhajd"

                }, {
                    name: "projstar2",
                    description: "hjkshdjkfhajd"

                }]
            };
            expect(this.formatter.format(input)).toEqual("gris's starred repos\nprojstar1 - hjkshdjkfhajd\nprojstar2 - hjkshdjkfhajd\n");
        });
    });
});


// {
//     username: "bobby",
//     subject: "repos",
//     query: "details",
//     results: [{
//         name: "projstar1",
//         description: "hjkshdjkfhajd"

//     }, {
//         name: "projstar2",
//         description: "hjkshdjkfhajd"

//     }, {
//         name: "projstar3",
//         description: "hjkshdjkfhajd"

//     }, {
//         name: "proj1",
//         description: "hjkshdjkfhajd"

//     }, {
//         name: "proj2",
//         description: "hjkshdjkfhajd"

//     }]
// }


// {
//     username: "bobby",
//     subject: "starred repos",
//     query: "details",
//     results: [{
//         name: "projstar1",
//         description: "hjkshdjkfhajd"
//     }, {
//         name: "projstar2",
//         description: "hjkshdjkfhajd"

//     }, {
//         name: "projstar3",
//         description: "hjkshdjkfhajd"

//     }]
// }
