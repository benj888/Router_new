import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// Types
import { State, Actions } from "../Type/useApiListStoreType";
import { getRestaurantList } from "@/api/restaurantsDataList";
import { responseSuccess } from "@/api/responseSuccess";
import { addRestaurant } from "@/api/addRestaurant";
import { deleteRestaurant } from "@/api/deleteRestaurant";
import { editName } from "@/api/editName";

const initialState: State = {
  asyncInitReady: false,
  isFetching: false,
  list: [],
  inputValue: "",
  editname: null,
  currentedit:"",
};

export const useApiListStore = create(
  immer<State & Actions>((set, get) => ({
    ...initialState,
    // 初始化 : 拉取/建立非同步選單等預設選項, 設定非同步初始化狀態
    init: async () => {},
    // store 狀態賦值
    handleSetState: (nextState) => set((draft) => ({ ...draft, ...nextState })),
    // 請求格式前後端轉換
    requestData: () => {
      return {
        // ...get().params,
      };
    },
    // 資料驗證
    validation: () => {
      return true;
    },
    // 送出行為
    onSubmit: async (e?: React.FormEvent<HTMLFormElement>) => {
      e?.preventDefault?.();
      get().fetchRestaurantWithPromise();
    },
    fetchRestaurantWithPromise: async () => {
      const res = await getRestaurantList();
      if (responseSuccess(res)) {
        set({ list: res.data.data });
      }
      return res;

      // Request payload
      // if (get().validation() && !get().isFetching) {
      //   set({ isFetching: true });
      //   // 產生 Request payload
      //   const request = get().requestData();
      //   const api = await getProjectList(request);
      //   if (api.statusCode === 0) {
      //     set((draft) => {
      //       draft.list = api.data;
      //     });
      //   } else {
      //     toastMessage(api.message, "取得列表失敗");
      //   }
      //   set({ isFetching: false });
      //   return api;
      // }
    },

    handleAddRestaurant: async () => {
      try {
        const postData = {
          data: {
            name: get().inputValue,
          },
        };

        const res = await addRestaurant(postData);

        if (responseSuccess(res)) {
          get().fetchRestaurantWithPromise();

          set({ inputValue: "" });
        }

        console.log(res);
      } catch (error: any) {
        console.log(error.response.data.error.message);
      }
    },
    handleDeleteRestaurant: async (documentId) => {
      try {
        const resDelete = await deleteRestaurant(documentId);
        if (responseSuccess(resDelete)) {
          get().fetchRestaurantWithPromise();
        }
      } catch (error: any) {
        console.log(error.response.data.error.message);
      }
    },

    handleEditRestaurant: async (documentId, newName) => {
      try {
        const resEdit = await editName(documentId, newName);
        if (responseSuccess(resEdit)) {
          await get().fetchRestaurantWithPromise();
          set({ editname: null });
        }
      } catch (error: any) {
        console.log(error.response.data.error.message);
      }
    },

    reset: () => set(initialState),
  }))
);
