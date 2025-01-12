export type Assign<
  Target extends Record<string, any>,
  Source extends Record<string, any>,
> = Source & Omit<Target, keyof Source>;

export type UtilityId =
  | 'environment-provider'
  | 'highlight'
  | 'locale-provider'
  | 'portal'
  | 'presence';

export type ComponentId =
  | 'accordion'
  | 'alert-dialog'
  | 'alert'
  | 'angle-slider'
  | 'avatar'
  | 'breadcrumbs'
  | 'carousel'
  | 'checkbox'
  | 'clipboard'
  | 'collapsible'
  | 'color-picker'
  | 'combobox'
  | 'date-picker'
  | 'dialog'
  | 'drawer'
  | 'editable'
  | 'field'
  | 'file-upload'
  | 'floating-panel'
  | 'hover-card'
  | 'menu'
  | 'number-input'
  | 'pagination'
  | 'popover'
  | 'pin-input'
  | 'progress-linear'
  | 'progress-circular'
  | 'qr-code'
  | 'radio-group'
  | 'rating-group'
  | 'segment-group'
  | 'select'
  | 'signature-pad'
  | 'slider'
  | 'splitter'
  | 'steps'
  | 'switch'
  | 'tabs'
  | 'tags-input'
  | 'timer'
  | 'time-picker'
  | 'toast'
  | 'toggle'
  | 'toggle-group'
  | 'tooltip'
  | 'tree-view'
  | 'tour';
