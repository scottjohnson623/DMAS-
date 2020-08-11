import AWS from "aws-sdk";

const bucketName = "solo-api-project";
const identityPoolId = "us-east-2:c7f55ccc-f7bf-4816-a080-752f599938bf";

AWS.config.update({
  region: "us-east-2",
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: identityPoolId,
  }),
});

const bucket = new AWS.S3({
  params: {
    Bucket: bucketName,
  },
});

export function listObjects() {
  console.log(AWS.config);
  const listObjects = new Promise((resolve, reject) => {
    bucket.listObjects((error, data) => {
      if (error) {
        console.error("error: ", error);
        return;
      }

      resolve(data.Contents);
    });
  });

  return listObjects;
}

export function getSingleObject(key) {
  const getSingleObject = new Promise((resolve, reject) => {
    bucket.getObject(
      {
        Bucket: bucketName,
        Key: key,
      },
      (error, data) => {
        if (error) {
          console.error("error: ", error);
          return;
        }

        resolve(data.Body.toString("base64"));
      }
    );
  });

  return getSingleObject;
}

export function saveObject(file) {
  const saveObject = new Promise((resolve, reject) => {
    bucket.putObject(
      {
        Key: file.name,
        Body: file.src,
        ContentEncoding: "base64",
        ContentType: "image/jpeg",
        ACL: "public-read",
      },
      (error, data) => {
        if (error) {
          console.error("error: ", error);
          return;
        }

        resolve(data);
      }
    );
  });

  return saveObject;
}
