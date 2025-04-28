export interface AppVersions {
  node: string;
  browser: string;
  electron: string;
}

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

export interface Api {
  searchMaterials: () => Material[];
}

export interface AppVersionsChannel {
  key: "versions";
  exposed: AppVersions;
}
export interface ApiChannel {
  key: "api";
  exposed: Api;
}
export type ExposedChannel = AppVersionsChannel | ApiChannel;
