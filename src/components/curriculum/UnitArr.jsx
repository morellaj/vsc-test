// Function for creating the list of currently visible units
export default function UnitArr(json) {
  const arr = Object.keys(json).map((tag) => {
    const unit = json[tag];
    return {
      unit: tag,
      title: unit.title,
      order: unit.order,
    };
  });
  return arr;
}
