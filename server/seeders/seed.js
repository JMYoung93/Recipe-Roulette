let User = require('../models/Profile');
let mongoose = require('mongoose');

const users = [
    new User({
        name: "Caroline Pastorelli",
        email: "caroline.pastorelli@gmail.com",
        password: "password1234"
    }),
];

let done = 0;

export const seedData = async () => {
    try {
        await User.deleteMany ({});

        for (let i = 0; i < users.length; i++) {
            users[i].save(function (err, result) {
                done++;
            });
        }
    } catch (err) {
        console.error(err);
    }

    console.log("Mock data is seeded from seed script.");
}