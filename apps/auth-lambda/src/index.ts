import { Handler } from "aws-lambda";
import { loginRequestSchema } from "@inventorymanager/app-schema";
import { config } from "./config";
import { authenticateWithAwsCognito } from "@inventorymanager/cognito-auth";

export const handler: Handler = async (event) => {
  try {
    const envVars = config.init();
    const validLoginRequest = loginRequestSchema.safeParse(event.body);

    if (!validLoginRequest.success) {
      return {
        isBase64Encoded: false,
        statusCode: 400,
        body: "invalid-request",
      };
    }

    return {
      isBase64Encoded: false,
      statusCode: 200,
      body: await authenticateWithAwsCognito(
        validLoginRequest.data.email,
        validLoginRequest.data.password,
        envVars.COGNITO_CLIENT_ID,
        envVars.COGNITO_CLIENT_SECRET,
        "us-east-1"
      ),
    };
  } catch (e) {
    return "cognito-login-error";
  }
};
