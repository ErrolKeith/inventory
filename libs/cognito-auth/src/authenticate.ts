import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { buildCognitoAuthCommand } from "./commands/authCommand";
import { z } from "zod";

const authenticatedResponseSchema = z.object({
  $metadata: z.object({
    httpStatusCode: z.number(),
    requestId: z.string(),
    extendedRequestId: z.unknown().optional(),
    cfId: z.unknown().optional(),
    attempts: z.number(),
    totalRetryDelay: z.number(),
  }),
  ChallengeName: z.string(),
  ChallengeParameters: z.object({
    USER_ID_FOR_SRP: z.string(),
    requiredAttributes: z.string(),
    userAttributes: z.string(),
  }),
  Session: z.string(),
});

export async function authenticateWithAwsCognito(
  email: string,
  password: string,
  clientId: string,
  clientSecret: string,
  region: string
) {
  const client = new CognitoIdentityProviderClient({
    region,
  });

  const authCommand = buildCognitoAuthCommand(
    email,
    password,
    clientId,
    clientSecret
  );

  try {
    const cognitoAuthResponse = await client.send(authCommand);
    const validResponse =
      authenticatedResponseSchema.safeParse(cognitoAuthResponse);

    if (!validResponse.success) {
      throw new Error("Unexpected Cognito response");
    }

    return {
      token: validResponse.data.Session,
      userId: validResponse.data.ChallengeParameters.USER_ID_FOR_SRP,
    };
  } catch (e) {
    console.error(JSON.stringify(e));
    return "unauthorized";
  }
}
