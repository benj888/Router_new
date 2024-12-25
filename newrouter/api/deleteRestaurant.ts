import { BaseResponse } from "@/type/common"; 
import { AxiosResponse } from "axios";
import { api } from "./base";

export const deleteRestaurant = async (
  documentId: string
): Promise<AxiosResponse<BaseResponse<any>>> => {
  return api.delete(`/restaurants/${documentId}`);
};