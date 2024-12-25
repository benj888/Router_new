import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { json } from "stream/consumers";

interface Prop {
  defaultVal: string[];
  onSave?: (val: string) => void;
  onClear?: () => void;
}

export const Example = (prop: Prop) => {
  //   const defaultString = localStorage.getItem("key");
  //   const parseDefaultArray = defaultString ? JSON.parse(defaultString) : [];

  const { onSave, onClear, defaultVal=[]} = prop;
  const [inputstr, setinputstr] = useState<string[]>(defaultVal);
  const [Stateinp, setStateinp] = useState("");
  return (
    <div>
      <div>{JSON.stringify(inputstr)} </div>

      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setinputstr([...inputstr, Stateinp]);
          setStateinp("");
          onSave?.(JSON.stringify([...inputstr, Stateinp]));
        }}
      >
        <TextField
          fullWidth
          size="small"
          type="text"
          value={Stateinp}
          onChange={(e) => setStateinp(e.target.value)}
        />

        <Button
          type="submit"
          color="warning"
          variant="outlined"
          className="bg-blue-400 text-white p-2"
          //   onClick={(e) => {
          //     // localStorage.setItem(
          //     //   "key",
          //     //   JSON.stringify([...inputstr, Stateinp])
          //     // );
          //     // console.log(Stateinp);
          //     setinputstr([...inputstr, Stateinp]);
          //     setStateinp("");

          //   }}
        >
          {" "}
          input{" "}
        </Button>

        <Button
          color="success"
          variant="outlined"
          onClick={(e) => {
            setinputstr([]);
            onClear?.();
          }}
        >
          calear
        </Button>
      </form>
    </div>
  );
};
