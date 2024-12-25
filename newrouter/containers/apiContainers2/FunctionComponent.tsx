import EditIcon from "@mui/icons-material/Edit";
import { RestaurantsData } from "@/api/restaurantsDataList";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { useApiListStore } from "./Store/useApiListStore";

interface Prop1 {
  index: number;
  items: RestaurantsData;
}

interface Prop2 {
  items: RestaurantsData;
}

interface Prop3 {
  items: RestaurantsData;
}

export const FunctionComponent = () => {
  //input and add
  const handleAddRestaurant = useApiListStore(
    (state) => state.handleAddRestaurant
  );
  const inputValue = useApiListStore((state) => state.inputValue);
  const handleSetState = useApiListStore((state) => state.handleSetState);

  return (
    <>
      <input
        type="text"
        className="border"
        value={inputValue}
        onChange={(e) => {
          handleSetState({ inputValue: e.target.value });
        }}
      />{" "}
      <button
        onClick={() => {
          handleAddRestaurant();
        }}
      >
        ADD
      </button>
    </>
  );
};

export const FunctionEditComponent = (prop: Prop1) => {
  const { index, items } = prop;
  const handleSetState = useApiListStore((state) => state.handleSetState);
  return (
    <EditIcon
      onClick={(e) => {
        handleSetState({
          editname: index,
          currentedit: items.name,
        });
      }}
    />
  );
};

export const FunctionCloseComponent = (prop: Prop2) => {
  const { items } = prop;
  const handleDeleteRestaurant = useApiListStore(
    (state) => state.handleDeleteRestaurant
  );
  return (
    <CloseIcon
      onClick={(e) => {
        handleDeleteRestaurant(items.documentId);
      }}
    />
  );
};

export const FunctionCheckComponent = (prop: Prop3) => {
  const { items } = prop;
  const currentedit = useApiListStore((state) => state.currentedit);
  const handleEditRestaurant = useApiListStore(
    (state) => state.handleEditRestaurant
  );
  return (
    <CheckIcon
      onClick={(e) => {
        handleEditRestaurant(items.documentId, currentedit);
      }}
    />
  );
};

export const FunctionEditInputComponent = () => {
  const handleSetState = useApiListStore((state) => state.handleSetState);
  const currentedit = useApiListStore((state) => state.currentedit);
  return (
    <input
      className="border"
      value={currentedit}
      onChange={(e) => {
        handleSetState({ currentedit: e.target.value });
      }}
    />
  );
};
