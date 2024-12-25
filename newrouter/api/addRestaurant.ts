import { api } from "./base";
import { BaseResponse } from "@/type/common"; 
import { AxiosResponse } from "axios";

export interface AddRestaurantsResponse {
  data: {
    name: String;
  };
}

export const addRestaurant = async (
  data: AddRestaurantsResponse
): Promise<AxiosResponse<BaseResponse<any>>> => {
  return api.post("/restaurants", data);
};