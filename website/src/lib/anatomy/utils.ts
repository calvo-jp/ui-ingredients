import type {ComponentAnatomyName as ZagComponentAnatomyName} from '@zag-js/anatomy-icons';
import type {Component} from 'svelte';
import type {SVGAttributes} from 'svelte/elements';
import {
  AccordionAnatomyIcon,
  AvatarAnatomyIcon,
  CarouselAnatomyIcon,
  CheckboxAnatomyIcon,
  CircularProgressAnatomyIcon,
  ClipboardAnatomyIcon,
  ColorPickerAnatomyIcon,
  ComboboxAnatomyIcon,
  DatePickerAnatomyIcon,
  DialogAnatomyIcon,
  EditableAnatomyIcon,
  FieldAnatomyIcon,
  FieldsetAnatomyIcon,
  FileUploadAnatomyIcon,
  HoverCardAnatomyIcon,
  LinearProgressAnatomyIcon,
  MenuAnatomyIcon,
  NumberInputAnatomyIcon,
  PaginationAnatomyIcon,
  PinInputAnatomyIcon,
  PopoverAnatomyIcon,
  QrCodeAnatomyIcon,
  RadioGroupAnatomyIcon,
  RatingGroupAnatomyIcon,
  SegmentedControlAnatomyIcon,
  SelectAnatomyIcon,
  SignaturePadAnatomyIcon,
  SliderAnatomyIcon,
  SplitterAnatomyIcon,
  StepsAnatomyIcon,
  SwitchAnatomyIcon,
  TabsAnatomyIcon,
  TagsInputAnatomyIcon,
  TimePickerAnatomyIcon,
  ToastAnatomyIcon,
  ToggleGroupAnatomyIcon,
  TooltipAnatomyIcon,
  TourAnatomyIcon,
  TreeViewAnatomyIcon,
} from '../generated/anatomy-icons';

type OmittedComponentAnatomyName =
  | 'segmented-control'
  | 'linear-progress'
  | 'circular-progress';

export type ComponentAnatomyName =
  | Exclude<ZagComponentAnatomyName, OmittedComponentAnatomyName>
  | 'segment-group'
  | 'progress-linear'
  | 'progress-circular';

export const allComponents: Record<
  ComponentAnatomyName,
  Component<SVGAttributes<SVGSVGElement>>
> = {
  'color-picker': ColorPickerAnatomyIcon,
  'date-picker': DatePickerAnatomyIcon,
  'file-upload': FileUploadAnatomyIcon,
  'hover-card': HoverCardAnatomyIcon,
  'progress-circular': CircularProgressAnatomyIcon,
  'progress-linear': LinearProgressAnatomyIcon,
  'number-input': NumberInputAnatomyIcon,
  'pin-input': PinInputAnatomyIcon,
  'qr-code': QrCodeAnatomyIcon,
  'radio-group': RadioGroupAnatomyIcon,
  'rating-group': RatingGroupAnatomyIcon,
  'segment-group': SegmentedControlAnatomyIcon,
  'signature-pad': SignaturePadAnatomyIcon,
  'tags-input': TagsInputAnatomyIcon,
  'time-picker': TimePickerAnatomyIcon,
  'toggle-group': ToggleGroupAnatomyIcon,
  'tree-view': TreeViewAnatomyIcon,
  accordion: AccordionAnatomyIcon,
  avatar: AvatarAnatomyIcon,
  carousel: CarouselAnatomyIcon,
  checkbox: CheckboxAnatomyIcon,
  clipboard: ClipboardAnatomyIcon,
  combobox: ComboboxAnatomyIcon,
  dialog: DialogAnatomyIcon,
  editable: EditableAnatomyIcon,
  field: FieldAnatomyIcon,
  fieldset: FieldsetAnatomyIcon,
  menu: MenuAnatomyIcon,
  pagination: PaginationAnatomyIcon,
  popover: PopoverAnatomyIcon,
  select: SelectAnatomyIcon,
  slider: SliderAnatomyIcon,
  splitter: SplitterAnatomyIcon,
  steps: StepsAnatomyIcon,
  switch: SwitchAnatomyIcon,
  tabs: TabsAnatomyIcon,
  toast: ToastAnatomyIcon,
  tooltip: TooltipAnatomyIcon,
  tour: TourAnatomyIcon,
};

export function getComponent(name: ComponentAnatomyName) {
  return allComponents[name];
}
