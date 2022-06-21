const chartData = (data, callback) => {
  const separateData = (array) => {
    let value = [];
    for (let i = 0; i < array.length; i++) {
      const checkIfItemIsExist = callback(value, array[i]);

      if (checkIfItemIsExist) {
        checkIfItemIsExist.push(array[i]);
      } else {
        value.push([array[i]]);
      }
    }
    return value;
  };

  const dataOfArrray = separateData(data).map((curr) =>
    curr.reduce((acc, curr) => {
      return acc + curr.Confirmed;
    }, 0)
  );

  return dataOfArrray;
};
export default chartData;
