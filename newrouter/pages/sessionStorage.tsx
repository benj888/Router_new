import { Example } from "@/component/example";
import NoSsr from "@mui/material/NoSsr";

const Sessionstorage = () => {

const DefaultVal = sessionStorage.getItem("key")?JSON.parse(sessionStorage.getItem("key") as string) : []


  return (
    <Example
      onSave={(value) => {
        console.log(value);
        sessionStorage.setItem("key", value);
      }}
      onClear={() => {
        console.log("trigger");
        sessionStorage.clear();
      }}
      defaultVal={DefaultVal}
    />
  );
};

export default () => {
  return (
    <NoSsr>
      <Sessionstorage />
    </NoSsr>
  );
};