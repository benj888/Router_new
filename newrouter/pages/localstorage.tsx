import { Example } from "@/component/example";
import NoSsr from "@mui/material/NoSsr";

const Localstorage = () => {

const DefaultVal = localStorage.getItem("key")?JSON.parse(localStorage.getItem("key") as string) : []


  return (
    <Example
      onSave={(value) => {
        console.log(value);
        localStorage.setItem("key", value);
      }}
      onClear={() => {
        console.log("trigger");
        localStorage.clear();
      }}
      defaultVal={DefaultVal}
    />
  );
};

export default () => {
  return (
    <NoSsr>
      <Localstorage />
    </NoSsr>
  );
};
