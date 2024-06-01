export default function propertiesOrder (obj, keys) {

  const objectByKeys = [];
  const sortedObject = [];

  for (const property in obj) {
    if (keys.includes(property)) {
      objectByKeys.push({ key: property, value: obj[property] });
    } else {
      sortedObject.push({ key: property, value: obj[property] });
    }
  }
  sortedObject.sort((a, b) => (a.key < b.key ? -1 : 1));
  return [...objectByKeys, ...sortedObject];
}