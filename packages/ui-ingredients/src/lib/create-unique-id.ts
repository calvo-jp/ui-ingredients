import {uid} from 'uid';

export function createUniqueId() {
  return uid(16);
}
