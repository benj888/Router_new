import { AxiosResponse } from "axios";
import { BaseResponse } from "@/type/common";
import { api } from "./base";

export const editName = async (
  documentId: string,
  newName: string
): Promise<AxiosResponse<BaseResponse<any>>> => {
  return api.put(`/restaurants/${documentId}`, { data: { name: newName } });
};
