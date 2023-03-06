const AWS = require("aws-sdk")
const { v4: UUIDV4 } = require('uuid')
const S3 = new AWS.S3()

AWS.config.update({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET,
    region: process.env.region,
});

exports.saveFile = async (req,res,files) => {
    try {
        let files = [];
        for (let i = 0; i < files.length; i++) {
            let fileContent = Buffer.from(files[i].data, "binary");
            let param = {
              Bucket: "mechat",
              Key: UUIDV4() + files[i].name,
              ContentType: 'image/png',
              Body: fileContent,
            }
            let paramLocation = await S3
              .upload(param, (err, data) => {
                if (err) {
                  throw err;
                }
              })
              .promise();
            files.push( paramLocation.Location);
          };
        return files
    } catch (error) {
        res.status(500).json(error)
    }
}
