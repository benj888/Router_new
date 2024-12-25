import { RestaurantsData } from "@/api/restaurantsDataList";
import {
    FunctionComponent,
    FunctionEditComponent,
    FunctionCloseComponent,
    FunctionCheckComponent,
    FunctionEditInputComponent,
  } from "./FunctionComponent";

interface RestaurantListProp {
    index: number;
    items: RestaurantsData;
    editname:number | null;
    currentedit: string;
    setCurrentEdit: (value: string) => void;
    handleEditRestaurant: (documentId: string, newName: string) => Promise<void>;
    setEditName: (value: number | null) => void;
    handleDeleteRestaurant: (documentId: string) => Promise<void>;
}

export const RestaurantListComponent = (prop:RestaurantListProp)=>{
    const {items,index,editname,currentedit,setCurrentEdit,handleEditRestaurant,setEditName,handleDeleteRestaurant} = prop
    return(
        // key={items.documentId}
        <div>
        {index === editname ? (
          <>
            <FunctionEditInputComponent
              currentedit={currentedit}
              setCurrentEdit={setCurrentEdit}
            />

            <FunctionCheckComponent
              currentedit={currentedit}
              items={items}
              handleEditRestaurant={handleEditRestaurant}
            />
          </>
        ) : (
          <>
            {items.name}{" "}
            <FunctionCloseComponent
              handleDeleteRestaurant={handleDeleteRestaurant}
              items={items}
            />
            <FunctionEditComponent
              setEditName={setEditName}
              setCurrentEdit={setCurrentEdit}
              index={index}
              items={items}
            />
          </>
        )}
      </div>
    )
}