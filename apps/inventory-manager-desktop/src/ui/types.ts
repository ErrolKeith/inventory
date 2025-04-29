export type BaseMaterial = "ingredient";
export type MaterialType =
  | BaseMaterial
  | "bread"
  | "condiment"
  | "protein"
  | "topping";
export type MaterialQuantityUnit = "count" | "fluid-ounce" | "ounce";
export interface Material {
  id: number;
  type: MaterialType;
  name: string;
  onHand: number;
  consumptionUnit: MaterialQuantityUnit;
}

export interface ApiChannel {
  key: "api";
  exposed: {
    searchMaterials: () => Material[];
  };
}

export interface AuthChannel {
  key: "auth";
  exposed: {
    login: (options: {
      email: string;
      password: string;
    }) => string | { token: string; userId: string };
  };
}

export interface AppVersionsChannel {
  key: "versions";
  exposed: {
    node: string;
    browser: string;
    electron: string;
  };
}
