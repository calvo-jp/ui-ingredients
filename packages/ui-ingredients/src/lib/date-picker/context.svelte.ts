import {createContext} from '$lib/create-context.svelte.js';
import type {
  DayTableCellProps,
  TableCellProps,
  TableProps,
  ViewProps,
} from '@zag-js/date-picker';
import type {CreateDatePickerReturn} from './create-date-picker.svelte.js';

export const [getDatePickerContext, setDatePickerContext] =
  createContext<CreateDatePickerReturn>('DatePicker');

export const [getDatePickerViewPropsContext, setDatePickerViewPropsContext] =
  createContext<ViewProps>('DatePickerView');

export const [getDatePickerTablePropsContext, setDatePickerTablePropsContext] =
  createContext<TableProps>('DatePickerTable');

export const [
  getDatePickerTableCellPropsContext,
  setDatePickerTableCellPropsContext,
] = createContext<TableCellProps>('DatePickerTableCell');

export const [
  getDatePickerDayTableCellPropsContext,
  setDatePickerDayTableCellPropsContext,
] = createContext<DayTableCellProps>('DatePickerDayTableCell');
