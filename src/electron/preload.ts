import { contextBridge } from "electron";

const mainWorldVersionChannel = {
  key: "versions",
  exposed: {
    node: process.versions.node,
    browser: process.versions.chrome,
    electron: process.versions.electron,
  },
};

const mainWorldMaterialsChannel = {
  key: "api",
  exposed: {
    searchMaterials: () => {
      return [
        {
          id: 1,
          name: "White Bread Slice",
          type: "bread",
          onHand: 125,
          consumptionUnit: "count",
        },
        {
          id: 2,
          name: "White American Cheese Slice",
          type: "cheese",
          onHand: 232,
          consumptionUnit: "count",
        },
        {
          id: 3,
          name: "Tomato Slice",
          type: "topping",
          onHand: 84,
          consumptionUnit: "count",
        },
        {
          id: 4,
          name: "Ketchup",
          type: "condiment",
          onHand: 84,
          consumptionUnit: "fluid-ounce",
        },
        {
          id: 5,
          name: "Mustard",
          type: "condiment",
          onHand: 157,
          consumptionUnit: "fluid-ounce",
        },
        {
          id: 6,
          name: "Ham",
          type: "protein",
          onHand: 682,
          consumptionUnit: "ounce",
        },
        {
          id: 7,
          name: "Wheat Bread Slice",
          type: "bread",
          onHand: 125,
          consumptionUnit: "count",
        },
        {
          id: 8,
          name: "Turkey",
          type: "protein",
          onHand: 567,
          consumptionUnit: "ounce",
        },
        {
          id: 9,
          name: "Swiss Cheese Slice",
          type: "cheese",
          onHand: 232,
          consumptionUnit: "count",
        },
      ];
    },
  },
};

const mainWorldExposedChannels = [
  mainWorldVersionChannel,
  mainWorldMaterialsChannel,
];

mainWorldExposedChannels.forEach((channel) => {
  contextBridge.exposeInMainWorld(channel.key, channel.exposed);
});
