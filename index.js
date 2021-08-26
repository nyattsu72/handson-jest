export function add(a, b) {
  return a + b;
}

export function addString(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return a + b;
  } else {
    return -1;
  }
}
