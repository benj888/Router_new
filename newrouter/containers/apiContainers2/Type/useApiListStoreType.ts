/** 列表頁面狀態 */
export interface State {
  /** 初始化已完成 */
  asyncInitReady: boolean;
  /** 請求狀態 */
  isFetching: boolean;
  /** 列表 */
  list: any[];
  inputValue: string;
  editname: number | null;
  currentedit:string;

}

/** 頁面 action */
export interface Actions {
  init: () => void;
  handleSetState: (nextState: Partial<State>) => void;
  requestData: () => any;
  validation: () => boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  reset: () => void;
  fetchRestaurantWithPromise: () => Promise<any>;
  handleAddRestaurant: () => void;
  handleDeleteRestaurant: (documentId: string) => void;
  handleEditRestaurant: (documentId: string, newName: string) => Promise<void>;
}
