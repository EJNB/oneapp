import axios from "axios";

// todo: try and catch
export async function signInWithEmailAndPassword({ email, password }) {
  const req = {
    url: "https://cognito-idp.us-east-1.amazonaws.com",
    method: "post",
    headers: {
      "Content-Type": "application/x-amz-json-1.1",
      "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
      "User-Agent":
        "aws-cli/1.17.0 Python/2.7.16 Darwin/19.3.0 botocore/1.14.0",
      "X-Amz-Content-Sha256":
        "beaead3198f7da1e70d03ab969765e0821b24fc913697e929e726aeaebf0eba3",
      "X-Amz-Date": "20210221T162810Z",
      Authorization:
        "AWS4-HMAC-SHA256 Credential=AKIAR5AURRDSUCS6JGHS/20210221/us-east-1/execute-api/aws4_request, SignedHeaders=content-type;host;user-agent;x-amz-content-sha256;x-amz-date;x-amz-target, Signature=f399265da8ee30516b9acc6533695617193952c0105e36846fae92cb686c5037",
    },
    data: {
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
      ClientId: "7dij5ksscapmlv8fivbj9eoiqt",
      AuthFlow: "USER_PASSWORD_AUTH",
    },
  };

  return await axios.request(req);
}
