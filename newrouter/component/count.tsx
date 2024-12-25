import { Dispatch, SetStateAction } from "react";

interface Prop{ 
    setValue: Dispatch<SetStateAction<number>>
}

export function Count(prop:Prop) {

  return (
    <div>
      <button onClick={(e)=>{
            prop.setValue(prev=>prev+1)
      }
      }>add</button>
    </div>
  );
}
