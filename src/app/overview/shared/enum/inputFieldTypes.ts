import {filteringFieldTypes} from './filteringFieldTypes';

export enum inputFieldTypes {
  duration = 'duration',
  multi = 'multi',
  text = 'text'
}

export function getInputFieldType(filteringField: filteringFieldTypes): inputFieldTypes {
  const map = new Map()
    .set(filteringFieldTypes.averageReplyTime, inputFieldTypes.duration)
    .set(filteringFieldTypes.age, inputFieldTypes.multi);
  let key = filteringFieldTypes[filteringField];
  if (map.has(key)) {
    return map.get(key);
  }
  return inputFieldTypes.text;
}
