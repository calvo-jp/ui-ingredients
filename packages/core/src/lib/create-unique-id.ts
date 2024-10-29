let prefix = 0;
let counter = 0;

export function createUniqueId() {
  if (prefix >= Number.MAX_SAFE_INTEGER) {
    prefix = 0;
  }

  if (counter >= Number.MAX_SAFE_INTEGER) {
    prefix += 1;
    counter = 0;
  } else {
    counter += 1;
  }

  return `${prefix}${counter}`.padStart(8, '0');
}
