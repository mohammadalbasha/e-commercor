export function filterToMongo(filters) {
  const output = {};
  for (const key in filters) {
    if (filters[key].max && filters[key].min) {
      output[key] = {
        $gte: filters[key].min,
        $lte: filters[key].max,
      };
    } else if (filters[key].min) {
      output[key] = {
        $gte: filters[key].min,
      };
    } else if (filters[key].max) {
      output[key] = {
        $lte: filters[key].max,
      };
    } else {
      if (typeof filters[key] == 'boolean') output[key] = filters[key];
      else {
        const regex = new RegExp(filters[key], 'i');
        output[key] = {
          $regex: regex,
        };
      }
    }
  }
  return output;
}
