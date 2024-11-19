export interface Prop {
  type: string;
  description: string;
  required: boolean;
  default: string;
}

export interface Props {
  [prop: string]: Prop;
}

export interface ApiEntries {
  [part: string]: Props;
}
