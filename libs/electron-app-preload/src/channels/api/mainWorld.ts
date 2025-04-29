import seedMaterials from "./db/seedMaterials.json";

const apiChannel = {
  key: "api",
  exposed: {
    searchMaterials: () => {
      return seedMaterials;
    },
  },
};

export default apiChannel;
