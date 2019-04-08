export function getSankeyData(response: any) {
  const genderValues = uniqueValuesOfColumn(response, "sex");
  const bloodSugarValues = uniqueValuesOfColumn(response, "fbs");
  const chestPainValues = uniqueValuesOfColumn(response, "cp");
  const nodeValues = [
    ...genderValues.values,
    ...bloodSugarValues.values,
    ...chestPainValues.values
  ];
  const nodes = calculateNodes(nodeValues);
  // provide source, target, and data to calculate percentage
  const links1 = calculateLinks(genderValues, bloodSugarValues, response);
  const links2 = calculateLinks(bloodSugarValues, chestPainValues, response);
  const data = {
    nodes,
    links: [...links1, ...links2]
  };

  return data;
}

function uniqueValuesOfColumn(input: any, query: string) {
  const genderValues: any = { key: query, values: [] };
  const values = input
    .map((item: any) => item[query])
    .filter(
      (value: any, index: any, self: any) => self.indexOf(value) === index
    );
  genderValues.values = values;
  return genderValues;
}

function calculateLinks(src: any, tar: any, response: any) {
  const totalRecords = response.length;
  console.log(totalRecords);

  const links: any = [];
  src.values.map((s: any) => {
    tar.values.map((t: any) => {
      links.push({
        source: s,
        target: t,
        value: Math.round(
          (response.filter((res: any) => {
            return res[src.key] == s && res[tar.key] == t;
          }).length /
            totalRecords) *
            100
        )
      });
    });
  });
  return links;
  // console.log('Links', links);
}
function calculateNodes(values: any) {
  const nodes: any = [];
  values.map((v: any) => nodes.push({ id: v }));
  // console.log('nodes', nodes);
  return nodes;
}
