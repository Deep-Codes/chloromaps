const createRandomData = (obj : {[key: string]: string}): {[key: string]: number}  => {
  const data = {};
  Object.keys(obj).forEach((e) => {
    // @ts-ignore
    data[e] = Math.floor(Math.random() * 10000);
  });
  return data;
}

export default createRandomData;