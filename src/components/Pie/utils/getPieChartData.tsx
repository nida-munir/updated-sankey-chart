export function transform(response: any, query = "cp") {
  const groupedData = getCount(response, query);
  return getData(groupedData);
}

function getCount(input: any, query: string) {
  var result = Object.keys(input).reduce(function(acc: any, key) {
    var column: any = input[key][query];
    if (acc[column]) acc[column]++;
    else acc[column] = 1;
    return acc;
  }, {});
  // convert count to percentage
  Object.keys(result).map(function(key, index) {
    result[key] = Math.round((result[key] / input.length) * 100);
  });

  console.log("per ", result);
  return result;
}

function getData(groupedData: any) {
  const data: any = [];
  Object.keys(groupedData).forEach(key => {
    const temp = {
      id: key,
      label: key,
      value: groupedData[key]
    };
    data.push(temp);
  });

  return data;
}

// function getBloodSugarData(groupedData: any) {
//   const data: any = [];
//   // let bsType = "";
//   Object.keys(groupedData).forEach(key => {
//     //   if (key == "1") {
//     //     bsType = "High blood sugar";
//     //   }
//     //   if (key == "0") {
//     //     bsType = "Low blood sugar";
//     //   }

//     const temp = {
//       id: key,
//       label: key,
//       value: groupedData[key]
//     };
//     data.push(temp);
//   });

//   return data;
// }

// function getExerciseData(groupedData: any) {
//   const data: any = [];
//   // let bsType = "";
//   Object.keys(groupedData).forEach(key => {
//     // if (key == "1") {
//     //   bsType = "Yes";
//     // }
//     // if (key == "0") {
//     //   bsType = "No";
//     // }

//     const temp = {
//       id: key,
//       label: key,
//       value: groupedData[key]
//     };
//     data.push(temp);
//   });

//   return data;
// }

// function getHeartRateData(groupedData: any) {
//   const data: any = [];
//   // let bsType = "";
//   Object.keys(groupedData).forEach(key => {
//     const temp = {
//       id: key,
//       label: key,
//       value: groupedData[key]
//     };
//     data.push(temp);
//   });

//   return data;
// }

// function getOldPeakData(groupedData: any) {
//   const data: any = [];
//   // let bsType = "";
//   Object.keys(groupedData).forEach(key => {
//     const temp = {
//       id: key,
//       label: key,
//       value: groupedData[key]
//     };
//     data.push(temp);
//   });

//   return data;
// }

// function getMajorVesselsData(groupedData: any) {
//   const data: any = [];
//   // let bsType = "";
//   Object.keys(groupedData).forEach(key => {
//     const temp = {
//       id: key,
//       label: key,
//       value: groupedData[key]
//     };
//     data.push(temp);
//   });

//   return data;
// }
