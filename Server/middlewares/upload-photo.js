const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const dotenv = require("dotenv");

dotenv.config();
//Acces key for the connection with AWS
aws.config.update({
  secretAccessKey: process.env.AWSSecretKey,
  accessKeyId: process.env.AWSAccessKeyId,
});
//Access keys for AWS
const s3 = new aws.S3();

//upload function with multer and multers3

const upload = multer({
  // multer will give us the photo from the frontend
  storage: multerS3({
    // multers3 will automatically store the photo in the bucket created in AWS
    s3: s3,
    bucket: "test-amazon-v1", // choose the name of the buckket at AWS
    acl: "public-read", // it can choosen between public and private
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname }); // The name of the file is the Value
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString()); // The date converted in a string is the key
    },
  }),
});

module.exports = upload;
