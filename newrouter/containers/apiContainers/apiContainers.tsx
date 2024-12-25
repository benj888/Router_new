import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "@/api/base";
import { ServerResponse } from "http";
import { responseSuccess } from "@/api/responseSuccess";
import { getRestaurantList } from "@/api/restaurantsDataList";
import { RestaurantsData } from "@/api/restaurantsDataList";
import { addRestaurant } from "@/api/addRestaurant";
import { deleteRestaurant } from "@/api/deleteRestaurant";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { editName } from "@/api/editName";
import dayjs from "dayjs";
import {
  FunctionComponent,
  FunctionEditComponent,
  FunctionCloseComponent,
  FunctionCheckComponent,
  FunctionEditInputComponent,
} from "./FunctionComponent";
import { RestaurantListComponent } from "./ListComponent";

export const ApiContainers = () => {
  const [currentedit, setCurrentEdit] = useState("");
  const [editname, setEditName] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<RestaurantsData[]>([]);
  console.log(list);

  const fetchRestaurantWithPromise = async () => {
    const res = await getRestaurantList();
    if (responseSuccess(res)) {
      setList(res.data.data);
    }
    return res;

    // getRestaurantList()
    //   .then((res) => {
    //     if (responseSuccess(res)) {
    //       setList(res.data.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };

  const handleAddRestaurant = async () => {
    try {
      const postData = {
        data: {
          name: inputValue,
        },
      };

      const res = await addRestaurant(postData);

      if (responseSuccess(res)) {
        fetchRestaurantWithPromise();
        setInputValue("");
      }

      console.log(res);
    } catch (error: any) {
      console.log(error.response.data.error.message);
    }
  };

  const handleDeleteRestaurant = async (documentId: string) => {
    try {
      const resDelete = await deleteRestaurant(documentId);
      if (responseSuccess(resDelete)) {
        fetchRestaurantWithPromise();
      }
    } catch (error: any) {
      console.log(error.response.data.error.message);
    }
  };

  const handleEditRestaurant = async (documentId: string, newName: string) => {
    try {
      const resEdit = await editName(documentId, newName);
      if (responseSuccess(resEdit)) {
        await fetchRestaurantWithPromise();
        setEditName(null);
      }
    } catch (error: any) {
      console.log(error.response.data.error.message);
    }
  };

  const sortList = list.sort((a, b) => {
    return dayjs(a.createdAt).valueOf() - dayjs(b.createdAt).valueOf();
  });

  useEffect(() => {
    fetchRestaurantWithPromise();
  }, []);

  return (
    <div>
      {sortList.map((items, index) => {
        return (
          <RestaurantListComponent
            key={items.documentId}
            items={items}
            index={index}
            editname={editname}
            currentedit={currentedit}
            setCurrentEdit={setCurrentEdit}
            handleEditRestaurant={handleEditRestaurant}
            setEditName={setEditName}
            handleDeleteRestaurant={handleDeleteRestaurant}
          />
        );
      })}

      <FunctionComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddRestaurant={handleAddRestaurant}
      />
    </div>
  );
};
