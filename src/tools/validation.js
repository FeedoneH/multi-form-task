export function validation(fields) {
  let keys = Object.keys(fields);
  for (let key of keys) {
    if (fields[key].trim() === "") {
      return false;
    }
    return true;
  }
}
