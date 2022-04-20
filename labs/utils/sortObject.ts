const sortObject = (d : {[key: string]: number}): {[key: string]: number}=>  Object.entries(d)
      .sort(([, a], [, b]) => a - b)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
export default sortObject;