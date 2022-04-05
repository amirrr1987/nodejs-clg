import { fileURLToPath, URL } from "url";

export default function logger(data) {
  console.debug(
    "--------------------- Start log ------------------------------"
  );
  // console.log("%cName is : " + `%cname   `, "color: blue;", "color: red;");
  console.log(
    "%cFile is: " + `%c${fileURLToPath(new URL(import.meta.url))}`,
    "color: blue;",
    "color: red;"
  );
  console.log(
    "%cType is : " + `%c${typeof data}   `,
    "color: blue;",
    "color: red;"
  );
  if (typeof data == "object") {
    console.log(
      "%cis Array: " + `%c${Array.isArray(data)} `,
      "color: blue;",
      "color: red;"
    );
  }
  if (Array.isArray(data) == true) {
    console.log(
      "%cArray Length: " + `%c${data.length} `,
      "color: blue;",
      "color: red;"
    );
  }
  console.log("%cdata return  : ", "color: blue;");
  console.dir(data);

  console.debug("--------------------- End log ------------------------------");
}
