import { useApiListStore } from "./Store/useApiListStore";

import { useEffect, useState } from "react";

import dayjs from "dayjs";
import { FunctionComponent } from "./FunctionComponent";
import { RestaurantListComponent } from "./ListComponent";

export const ApiContainers2 = () => {
  const fetchRestaurantWithPromise = useApiListStore(
    (state) => state.fetchRestaurantWithPromise
  );

  const list = useApiListStore((state) => state.list);


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

          />
        );
      })}

      <FunctionComponent />
    </div>
  );
};
