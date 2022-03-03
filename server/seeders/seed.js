const { Profile } = require('../models');
const profileData = require('./profileData.json');
const db = require('../config/connection');

db.once('open', async () => {
    try {
        await Profile.deleteMany({});
        await Profile.insertMany(profileData);

        // for (let i = 0; i < profileData.length; i++) {
        //     const { _id, profileAuthor } = await Profile.create(profileData[i]);
        //     const profiles = await Profile.findOneAndUpdate(
        //         { username: profileAuthor},
        //         {
        //             $addToSet: {
        //                 profiles: _id
        //             },
        //         }
        //     );
        // }
    } catch (err) {
        console.error(err) ;
        process.exit(1);
        }
        console.log('all done');
        process.exit(0)
});



// mongoose.connect('mongodb://localhostL27017', {
//     useNewUrlParser: true, useUnifiedTopology: true
// })
// .then(() => {
//     console.log('Mongo Connection Open');
// })
// .catch((err) => {
//     console.log(err);
// })
// const profiles = [
//     new Profile({
//         name: "Caroline Pastorelli",
//         email: "caroline.pastorelli@gmail.com",
//         password: "password1234"
//     }),
// ];

// let done = 0;

// const seedData = async () => {
//     try {
//         await Profile.deleteMany ({});
//         await Profile.insertMany(profiles);

//         for (let i = 0; i < profiles.length; i++) {
//             profiles[i].save(function (err, result) {
//                 done++;
//             });
//         }
//     } catch (err) {
//         console.error(err);
//     }

//     console.log("Mock data is seeded from seed script.");
// }

//     module.exports = seedData()