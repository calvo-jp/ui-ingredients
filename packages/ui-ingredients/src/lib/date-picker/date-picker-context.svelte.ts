import type {
  DayTableCellProps,
  TableCellProps,
  TableProps,
  ViewProps,
} from '@zag-js/date-picker';
import {createContext} from '../create-context.svelte.js';
import type {CreateDatePickerReturn} from './create-date-picker.svelte.js';

export const [getDatePickerContext, setDatePickerContext] =
  createContext<CreateDatePickerReturn>('DatePicker');

export const [getDatePickerViewPropsContext, setDatePickerViewPropsContext] =
  createContext<ViewProps>('DatePickerView.props');

export const [getDatePickerTablePropsContext, setDatePickerTablePropsContext] =
  createContext<TableProps>('DatePickerTable.props');

export const [
  getDatePickerTableCellPropsContext,
  setDatePickerTableCellPropsContext,
] = createContext<TableCellProps>('DatePickerTableCell.props');

export const [
  getDatePickerDayTableCellPropsContext,
  setDatePickerDayTableCellPropsContext,
] = createContext<DayTableCellProps>('DatePickerDayTableCell.props');
