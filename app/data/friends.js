const request = require('request');

const friends = [];

// create 20 random friends using random user api
for (let i = 0; i < 20; i++) {
    request('https://randomuser.me/api/', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }

        let fname = body.results[0].name.first;
        let lname = body.results[0].name.last;
        fname = `${fname[0].toUpperCase()}${fname.substring(1)}`;
        lname = `${lname[0].toUpperCase()}${lname.substring(1)}`;
        let name = `${fname} ${lname}`;
        let photo = body.results[0].picture.large;
        let scores = [];
        
        for (let j = 0; j < 10; j++) {
            let rand = Math.ceil(Math.random() * 5);
            scores.push(rand);
        }

        friends.push( 
            {
                name: name,
                photo: photo,
                scores: scores
            }
        );
    });
}

module.exports = friends;