// const request = require('request');

const friends = [
    {
        "name": "Rudinele Rezende",
        "photo": "https://randomuser.me/api/portraits/women/52.jpg",
        "scores": [
            2,
            4,
            1,
            1,
            2,
            5,
            4,
            4,
            5,
            2
        ]
    },
    {
        "name": "Hilda Tucker",
        "photo": "https://randomuser.me/api/portraits/women/36.jpg",
        "scores": [
            5,
            4,
            4,
            2,
            4,
            4,
            1,
            3,
            3,
            4
        ]
    },
    {
        "name": "Lotta Leppo",
        "photo": "https://randomuser.me/api/portraits/women/47.jpg",
        "scores": [
            4,
            2,
            2,
            5,
            5,
            5,
            1,
            4,
            4,
            3
        ]
    },
    {
        "name": "Altino Gomes",
        "photo": "https://randomuser.me/api/portraits/men/98.jpg",
        "scores": [
            1,
            4,
            3,
            5,
            5,
            5,
            2,
            5,
            3,
            4
        ]
    },
    {
        "name": "Frederikke Jørgensen",
        "photo": "https://randomuser.me/api/portraits/men/73.jpg",
        "scores": [
            3,
            3,
            3,
            3,
            4,
            1,
            1,
            5,
            3,
            5
        ]
    },
    {
        "name": "Sharlene Murray",
        "photo": "https://randomuser.me/api/portraits/women/71.jpg",
        "scores": [
            4,
            1,
            5,
            2,
            2,
            1,
            2,
            5,
            3,
            4
        ]
    },
    {
        "name": "Lycke Slinning",
        "photo": "https://randomuser.me/api/portraits/women/71.jpg",
        "scores": [
            4,
            2,
            2,
            4,
            2,
            3,
            3,
            5,
            5,
            5
        ]
    },
    {
        "name": "Juan Watkins",
        "photo": "https://randomuser.me/api/portraits/men/6.jpg",
        "scores": [
            5,
            3,
            5,
            4,
            3,
            4,
            5,
            4,
            1,
            4
        ]
    },
    {
        "name": "Mattie Bishop",
        "photo": "https://randomuser.me/api/portraits/women/86.jpg",
        "scores": [
            4,
            2,
            4,
            3,
            3,
            2,
            4,
            2,
            2,
            1
        ]
    },
    {
        "name": "Suzy Robinson",
        "photo": "https://randomuser.me/api/portraits/women/86.jpg",
        "scores": [
            4,
            2,
            5,
            5,
            4,
            5,
            3,
            2,
            3,
            4
        ]
    },
    {
        "name": "Harper Ginnish",
        "photo": "https://randomuser.me/api/portraits/women/39.jpg",
        "scores": [
            5,
            4,
            3,
            1,
            4,
            2,
            2,
            3,
            2,
            4
        ]
    },
    {
        "name": "Luukas Leino",
        "photo": "https://randomuser.me/api/portraits/men/91.jpg",
        "scores": [
            5,
            1,
            4,
            2,
            4,
            1,
            4,
            1,
            5,
            5
        ]
    },
    {
        "name": "Nathaniel Gomez",
        "photo": "https://randomuser.me/api/portraits/men/32.jpg",
        "scores": [
            4,
            1,
            2,
            2,
            1,
            4,
            1,
            4,
            1,
            5
        ]
    },
    {
        "name": "Peggy Ruiz",
        "photo": "https://randomuser.me/api/portraits/women/73.jpg",
        "scores": [
            5,
            5,
            4,
            5,
            3,
            5,
            5,
            1,
            1,
            1
        ]
    },
    {
        "name": "Christian Jørgensen",
        "photo": "https://randomuser.me/api/portraits/men/56.jpg",
        "scores": [
            4,
            1,
            2,
            4,
            3,
            3,
            3,
            4,
            2,
            1
        ]
    },
    {
        "name": "Leah Walker",
        "photo": "https://randomuser.me/api/portraits/women/0.jpg",
        "scores": [
            5,
            5,
            4,
            4,
            4,
            3,
            3,
            5,
            5,
            5
        ]
    },
    {
        "name": "Matthäus Fuhr",
        "photo": "https://randomuser.me/api/portraits/men/3.jpg",
        "scores": [
            1,
            2,
            2,
            4,
            4,
            1,
            5,
            2,
            4,
            2
        ]
    },
    {
        "name": "Joaquin Molina",
        "photo": "https://randomuser.me/api/portraits/men/91.jpg",
        "scores": [
            5,
            5,
            2,
            5,
            2,
            2,
            4,
            5,
            4,
            2
        ]
    },
    {
        "name": "Frederik Sørensen",
        "photo": "https://randomuser.me/api/portraits/men/41.jpg",
        "scores": [
            5,
            4,
            1,
            5,
            5,
            2,
            3,
            4,
            2,
            5
        ]
    },
    {
        "name": "Oya Ekşioğlu",
        "photo": "https://randomuser.me/api/portraits/women/33.jpg",
        "scores": [
            2,
            4,
            4,
            1,
            5,
            4,
            1,
            2,
            5,
            2
        ]
    }
];

// create 20 random friends using random user api
// for (let i = 0; i < 20; i++) {
//     request('https://randomuser.me/api/', { json: true }, (err, res, body) => {
//         if (err) { return console.log(err); }

//         let fname = body.results[0].name.first;
//         let lname = body.results[0].name.last;
//         fname = `${fname[0].toUpperCase()}${fname.substring(1)}`;
//         lname = `${lname[0].toUpperCase()}${lname.substring(1)}`;
//         let name = `${fname} ${lname}`;
//         let photo = body.results[0].picture.large;
//         let scores = [];

//         for (let j = 0; j < 10; j++) {
//             let rand = Math.ceil(Math.random() * 5);
//             scores.push(rand);
//         }

//         friends.push(
//             {
//                 name: name,
//                 photo: photo,
//                 scores: scores
//             }
//         );
//     });
// }

module.exports = friends;