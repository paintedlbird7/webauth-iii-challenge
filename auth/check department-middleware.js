// module.exports = department => {
//     // return middleware
//     return function(req, res, next) {
//         if (req.decodedJwt.departments && req.decodedJwt.departments.includes(department)) {
//             next();
//         } else {
//             res.status(403).json({ you: 'You have no power here'})
//         }
//     }
// }

