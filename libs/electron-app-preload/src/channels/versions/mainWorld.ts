const versionChannel = {
  key: "versions",
  exposed: {
    node: process.versions.node,
    browser: process.versions.chrome,
    electron: process.versions.electron,
  },
};

export default versionChannel;
