export function transformColumnValues(response: any) {
  response = editGender(response, "1", "male", "sex");
  response = editGender(response, "0", "female", "sex");
  response = editGender(response, "0", "high blood sugar", "fbs");
  response = editGender(response, "1", "low blood sugar", "fbs");
  // console.log("response", response);
  return response;
}

export function editGender(array: any, oldName: any, name: any, key: string) {
  console.log("changing ", oldName, " to ", name);
  return array.map((item: any) => {
    var temp = Object.assign({}, item);
    if (temp[key] === oldName) {
      temp[key] = name;
    }
    return temp;
  });
}
