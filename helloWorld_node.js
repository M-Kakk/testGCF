/* default code from the Cloud Functions node.js 16 helloWorld in GCP
*/

exports.helloWorld = (req, res) => {
 let message = req.query.message || req.body.message || 'Hello World';
 res.status(200).send(message);
};

