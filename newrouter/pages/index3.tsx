import getConfig from "next/config";
import { useRouter } from "next/router";
import { Count } from "@/component/count";
import { Shownumber } from "@/component/shownumber";
import { useState } from "react";


const { publicRuntimeConfig } = getConfig();
function Home() {
  const router = useRouter();
  const [value, setValue] = useState(0);



  return (
    <>
      <div
        onClick={(e) => {
          router.push("/index2");
        }}
      >
        Home
      </div>

      <div
        onClick={(e) => {
          router.push("/catetory/...");
        }}
      >
        goto...
      </div>
      <div>version:{publicRuntimeConfig.version}</div>

      <div>
        <Count setValue={setValue} />
      </div>
      <div>
        <Shownumber value={value} />
      </div>


    </>
  );
}



export default Home;
