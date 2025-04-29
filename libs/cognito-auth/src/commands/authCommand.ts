import {
  AuthFlowType,
  InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { createHmac } from "crypto";

function generateBase64HmacSha256(key: string, message: string) {
  return createHmac("sha256", key).update(message).digest("base64");
}

function buildCognitoAuthCommand(
  email: string,
  password: string,
  clientId: string,
  clientSecret: string
) {
  const secretHash = generateBase64HmacSha256(
    clientSecret,
    `${email}${clientId}`
  );

  const command = new InitiateAuthCommand({
    AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
      SECRET_HASH: secretHash,
    },
    ClientId: clientId,
  });

  return command;
}

export { buildCognitoAuthCommand };
