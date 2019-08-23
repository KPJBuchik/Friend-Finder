
var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {
        let sum1;

        var bestMatch = {
            totalDifference: Infinity,
            name: "",
            photo: ""
        }
        console.log(req.body.scores)
        for (var k = 0; k < req.body.scores.length; k++) {
            sum1 += parseInt(req.body.scores[k])
            console.log("sum1"+sum1)

        }
        //loop over friends data 
        for (var i = 0; i < friends.length; i++) {
            let diff = 0;
            let currentFriend = friends[i]
            //loop over scores
            for (var j = 0; j < currentFriend.scores.length; j++) {
                let sum;
                sum += parseInt(currentFriend.scores[j])

                // console.log(sum)
                //difference instead of sum
                diff = Math.abs(sum1 - sum)
                if (diff <= bestMatch.totalDifference) {
                    // userScore=diff
                    totalDifference = diff

                    bestMatch.name = friends.name
                    bestMatch.photo = friends.name
                    totalDifference = diff
                }

            }
            //just grabs last entry
        }
        friends.push(req.body)
        res.json(bestMatch);
        // console.log(req.body.scores)
        // console.log(bestMatch)
    })
}

