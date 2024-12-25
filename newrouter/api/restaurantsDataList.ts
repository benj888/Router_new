import { api } from "./base";
import { BaseResponse } from "@/type/common";
import { AxiosResponse } from "axios";

export interface RestaurantsData {
  /** 建立時間 */
  createdAt: string;
  /** ID */
  id: number;
  /** 名稱 */
  name: string;
  /** 發布時間 */
  publishedAt: string;
  /** 更新時間 */
  updatedAt: string;
  /**系統id*/
  documentId: string;
}

export const getRestaurantList = async (): Promise<
  AxiosResponse<BaseResponse<RestaurantsData>>
> => {
  return api.get("/restaurants");
};
