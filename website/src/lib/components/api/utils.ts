import type {AnatomyInstance} from 'ui-ingredients';

export interface Prop {
  type: string;
  description?: string;
  defaultValue?: string;
}

export interface Context {
  [prop: string]: Prop;
}

export interface DataAttr {
  [attr: string]: string;
}

export interface ApiEntry {
  context: Context;
  dataAttr?: DataAttr;
}

export type ApiEntries<T extends string = string> = Partial<
  Record<T, ApiEntry>
>;

export function apiEntry<T extends string>(obj: ApiEntries<T>) {
  return obj;
}

type AnatomyKeys<T extends {keys(): string[]; [x: string]: unknown}> =
  Capitalize<ReturnType<T['keys']>[number]>;

export function apiEntryFromAnatomy<T extends string>(
  anatomy: AnatomyInstance<T>,
) {
  return (
    obj: ApiEntries<AnatomyKeys<typeof anatomy> | 'Root' | (string & {})>,
  ) => {
    return obj;
  };
}
