import { IpcMainInvokeEvent } from "electron";
import { loginRequestSchema } from "@inventorymanager/app-schema";
import axios from "axios";

export const login = async (event: IpcMainInvokeEvent, args: string[]) => {
  const authLambdaUrl =
    process.env.NODE_ENV === "DEV" ? "http://localhost:8000" : "";

  const validArgs = loginRequestSchema.safeParse(JSON.parse(args[0]));

  if (!validArgs.success) {
    return "invalid-request";
  }

  try {
    const res = await axios.post(authLambdaUrl, validArgs.data);

    if (res.data === "unauthorized") {
      return "unauthorized";
    }

    // TODO: validate response is an auth response with session.
    // TODO: set the session token using `app`

    return res.data;
  } catch (e) {
    return e;
  }
};
