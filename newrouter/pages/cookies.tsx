import { Example } from "@/component/example";
import { NextPageContext } from "next";
import nookies from "nookies";
import { parseCookies, setCookie, destroyCookie } from "nookies";

interface Props {
  keys: string;
}

const CookieExample = (props: Props) => {
  console.log(props);
  const defaultArray = props.keys ? JSON.parse(props.keys) : [];
  return (
    <Example
      defaultVal={defaultArray}
      onSave={(val) => {
        setCookie(null, "cookieArray", val, {
          maxAge: 10000,
          path: "/",
        });
      }}
      onClear={() => {
        destroyCookie(null, "cookieArray");
      }}
    />
  );
};
export default CookieExample;

export async function getServerSideProps(ctx: NextPageContext) {
  const cookies = nookies.get(ctx);

  return {
    props: {
      keys: cookies?.cookieArray ?? "[]",
    },
  };
}
