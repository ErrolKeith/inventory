import express from "express";
import cors from "cors";
import { config } from "./config";
import { authenticateWithAwsCognito } from "@inventorymanager/cognito-auth";
import { loginRequestSchema } from "@inventorymanager/app-schema";

async function main() {
  const envVars = config.init();
  const app = express();
  app.use(cors());

  app.post("/", express.json(), async function (req, res) {
    try {
      const validLoginRequest = loginRequestSchema.safeParse(req.body);

      if (!validLoginRequest.success) {
        res.send("invalid-request");
        return;
      }

      const authResponse = await authenticateWithAwsCognito(
        validLoginRequest.data.email,
        validLoginRequest.data.password,
        envVars.COGNITO_CLIENT_ID,
        envVars.COGNITO_CLIENT_SECRET,
        "us-east-1"
      );

      res.send(authResponse);
    } catch (e) {
      res.send("cognito-login-error");
    }
  });

  const port = 8000;

  app.listen(port, () => {
    console.log(`local auth-lambda is running on port ${port}.`);
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
