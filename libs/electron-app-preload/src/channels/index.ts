import apiChannel from "./api/mainWorld";
import authChannel from "./auth/mainWorld";
import versionChannel from "./versions/mainWorld";

const mainExposedChannels = [apiChannel, authChannel, versionChannel];

export default mainExposedChannels;
