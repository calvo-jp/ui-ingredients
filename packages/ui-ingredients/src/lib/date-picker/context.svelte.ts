import {Context} from '$lib/utils.svelte.js';
import type {
  DayTableCellProps,
  TableCellProps,
  TableProps,
  ViewProps,
} from '@zag-js/date-picker';
import type {CreateDatePickerReturn} from './create-date-picker.svelte.js';

export const datePickerContext = new Context<CreateDatePickerReturn>(
  'DatePicker',
);
export const datePickerViewPropsContext = new Context<ViewProps>(
  'DatePickerView',
);
export const datePickerTablePropsContext = new Context<TableProps>(
  'DatePickerTable',
);
export const datePickerTableCellPropsContext = new Context<TableCellProps>(
  'DatePickerTableCell',
);
export const datePickerDayTableCellPropsContext =
  new Context<DayTableCellProps>('DatePickerDayTableCell');
