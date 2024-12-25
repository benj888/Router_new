import EditIcon from "@mui/icons-material/Edit";
import { RestaurantsData } from "@/api/restaurantsDataList";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
interface Prop {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleAddRestaurant: () => Promise<void>;
}

interface Prop1 {
  setEditName: (value: number | null) => void;
  setCurrentEdit: (value: string) => void;
  index: number;
  items: RestaurantsData;
}

interface Prop2 {
  handleDeleteRestaurant: (documentId: string) => Promise<void>;
  items: RestaurantsData;
}

interface Prop3 {
  items: RestaurantsData;
  currentedit: string;
  handleEditRestaurant: (documentId: string, newName: string) => Promise<void>;
}

interface Prop4 {
  currentedit: string;
  setCurrentEdit: (value: string) => void;
}

export const FunctionComponent = (prop: Prop) => {
  //input and add
  const { inputValue, setInputValue, handleAddRestaurant } = prop;
  return (
    <>
      <input
        type="text"
        className="border"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
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
  const { setEditName, setCurrentEdit, index, items } = prop;

  return (
    <EditIcon
      onClick={(e) => {
        setEditName(index);
        setCurrentEdit(items.name);
      }}
    />
  );
};

export const FunctionCloseComponent = (prop: Prop2) => {
  const { handleDeleteRestaurant, items } = prop;
  return (
    <CloseIcon
      onClick={(e) => {
        handleDeleteRestaurant(items.documentId);
      }}
    />
  );
};

export const FunctionCheckComponent = (prop: Prop3) => {
  const { currentedit, items, handleEditRestaurant } = prop;
  return (
    <CheckIcon
      onClick={(e) => {
        handleEditRestaurant(items.documentId, currentedit);
      }}
    />
  );
};

export const FunctionEditInputComponent = (prop: Prop4) => {
  const { currentedit, setCurrentEdit } = prop;
  return (
    <input
      className="border"
      value={currentedit}
      onChange={(e) => {
        setCurrentEdit(e.target.value);
      }}
    />
  );
};
