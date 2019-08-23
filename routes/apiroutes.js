
var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {

        
        let userScore=Infinity
        //loop over friends data 
        for (var i = 0; i < friends.length; i++) {
            let diff=0;
            
            //loop over scores
            for (var j = 0; j < req.body.scores.length; j++) {
                let sum;
               sum =  (req.body.scores[j])
            
                //difference instead of sum
                diff += parseFloat(friends[i].scores[j]) - sum
                
             //   sum += (friends[i].scores[j])
            }
            if (diff < userScore) {
                 userScore=diff
				 name = friends[i].name;
                 photo = friends[i].photo;
            }
            
        
//just grabs last entry
        }
        friends.push(req.body)
        res.json({name: name, photo: photo});
        console.log(name)
        console.log(req.body.scores)
    })
}

// loop over user scores to get a sum or friends scores length?
