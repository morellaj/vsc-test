// Function for creating the list of currently visible units
export default function UnitArr(json) {
  const arr = [];
  let i = 0;
  for (const tag in json) {
    const unit = json[tag];
    if (!unit.hidden) {
      i += 1;
      arr.push({
        unit: tag,
        title: unit.title,
        order: unit.order,
        ngss: unit.ngss,
      });
    }
  }
  return arr;
}
