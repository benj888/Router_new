import { RestaurantsData } from "@/api/restaurantsDataList";
import {
  FunctionComponent,
  FunctionEditComponent,
  FunctionCloseComponent,
  FunctionCheckComponent,
  FunctionEditInputComponent,
} from "./FunctionComponent";
import { useApiListStore } from "./Store/useApiListStore";

interface RestaurantListProp {
  index: number;
  items: RestaurantsData;
}

export const RestaurantListComponent = (prop: RestaurantListProp) => {
  const { items, index } = prop;

  const editname = useApiListStore((state) => state.editname);

  return (
    // key={items.documentId}
    <div>
      {index === editname ? (
        <>
          <FunctionEditInputComponent />

          <FunctionCheckComponent items={items} />
        </>
      ) : (
        <>
          {items.name} <FunctionCloseComponent items={items} />
          <FunctionEditComponent index={index} items={items} />
        </>
      )}
    </div>
  );
};
