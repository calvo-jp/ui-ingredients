function boolean_() {
  return 'boolean';
}

function string_() {
  return 'string';
}

function number_() {
  return 'number';
}

function unknown_() {
  return 'unknown';
}

function array_(type: string = 'unknown') {
  return `Array<${type}>`;
}

function record_(key: string, value: string) {
  return `Record<${key}, ${value}>`;
}

function snippet_(...args: string[]) {
  return args.length ? `Snippet<[${args.join(', ')}]>` : 'Snippet';
}

function partial_(type: string) {
  return `Partial<${type}>`;
}

function function_(return_: string, ...args: string[]) {
  return `(${args.join(', ')}) => ${return_}`;
}

function union_(...types: string[]) {
  return types.join(' | ');
}

function interface_(pairs: Record<string, string>) {
  const props = Object.entries(pairs)
    .map(([k, v]) => `\t${k}: ${v};`)
    .join('\n');

  return `{\n${props}\n}`;
}

function literal_(value: string) {
  return `'${value}'`;
}

export const T = {
  boolean: boolean_,
  string: string_,
  array: array_,
  number: number_,
  unknown: unknown_,
  snippet: snippet_,
  function: function_,
  union: union_,
  interface: interface_,
  partial: partial_,
  record: record_,
  literal: literal_,
};
