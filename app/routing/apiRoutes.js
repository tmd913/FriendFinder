const friendsData = require("../data/friends");

// sort array of differences between user scores and possible match scores
function compareDiff(a, b) {
    if (a.diff < b.diff)
      return -1;
    if (a.diff > b.diff)
      return 1;
    return 0;
}

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    });

    app.post('/api/friends', (req, res) => {
        // array to hold hold friend index and aggregate score difference
        const diffArr = [];
        // iterate through each possible match
        friendsData.forEach( (element, i) => {
            let diff = 0;
            // iterate through each score
            element.scores.forEach( (score, j) => {
                // calculate difference between scores and add to diff var
                diff += Math.abs(score - req.body.scores[j]);
            });
            // add object to diffArr with friend index and agggregate score diff
            diffArr.push({ "index":  i, "diff": diff});
        });
        
        // sort array of differences
        diffArr.sort(compareDiff);
        // use index of match with lowest difference as response
        res.json(friendsData[diffArr[0].index]);
        // add new user to friends array
        friendsData.push(req.body);
    })
};