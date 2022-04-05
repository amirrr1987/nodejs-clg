export default function logger(data) {
  console.timeEnd(
    "--------------------- Start log ------------------------------"
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

  console.timeEnd(
    "--------------------- End log ------------------------------"
  );
}
