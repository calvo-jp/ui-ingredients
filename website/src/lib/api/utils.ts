/* eslint-disable @typescript-eslint/no-unused-vars */

import type {AnatomyInstance} from 'ui-ingredients';

interface Prop {
  type: string;
  description?: string;
  defaultValue?: string;
}

interface Context {
  [prop: string]: Prop;
}

interface DataAttr {
  [attr: string]: string;
}

interface ApiEntry {
  context: Context;
  dataAttr?: DataAttr;
}

type ApiEntries<T extends string = string> = Partial<Record<T, ApiEntry>>;

export function apiEntry<T extends string>(obj: ApiEntries<T>) {
  return obj;
}

type AnatomyKeys<T extends {keys(): string[]; [x: string]: unknown}> =
  Capitalize<ReturnType<T['keys']>[number]>;

export function apiEntryFromAnatomy<T extends string>(
  anatomy: AnatomyInstance<T>,
) {
  return (obj: ApiEntries<AnatomyKeys<typeof anatomy>>) => {
    return obj;
  };
}
