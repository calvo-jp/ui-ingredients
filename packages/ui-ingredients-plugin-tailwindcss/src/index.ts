import plugin from 'tailwindcss/plugin.js';

export interface StaticVariantEntry {
  key: string;
  values: (string | null)[];
}

const STATIC_VARIANT_ENTRIES: StaticVariantEntry[] = [
  {key: 'hover', values: [null]},
  {key: 'focus', values: [null]},
  {key: 'focus-visible', values: [null]},
  {key: 'focusable', values: [null]},
  {key: 'active', values: [null]},
  {key: 'valid', values: [null]},
  {key: 'invalid', values: [null]},
  {key: 'disabled', values: [null]},
  {key: 'readonly', values: [null, 'read-only']},
  {key: 'current', values: [null]},
  {key: 'inview', values: [null]},
  {key: 'copied', values: [null]},
  {key: 'collapsible', values: [null]},
  {key: 'highlighted', values: [null]},
  {key: 'selected', values: [null]},
  {key: 'placeholder', values: [null]},
  {key: 'placeholder-shown', values: [null]},
  {key: 'autoresize', values: [null]},
  {key: 'required', values: [null]},
  {key: 'grabbed', values: [null]},
  {key: 'dragging', values: [null]},
  {key: 'complete', values: [null]},
  {key: 'incomplete', values: [null]},
  {key: 'expanded', values: [null, 'state="expanded"']},
  {key: 'half', values: [null]},
  {key: 'first', values: [null]},
  {key: 'mounted', values: [null]},
  {key: 'overlap', values: [null]},
  {key: 'sibling', values: [null]},
  {key: 'paused', values: [null]},
  {key: 'pressed', values: [null]},
  {key: 'on', values: ['state="on"']},
  {key: 'off', values: ['state="off"']},
  {key: 'open', values: ['state="open"']},
  {key: 'closed', values: ['state="closed"']},
  {key: 'hidden', values: [null, 'state="hidden"']},
  {key: 'visible', values: [null, 'state="visible"']},
  {key: 'checked', values: [null, 'state="checked"']},
  {key: 'unchecked', values: [null, 'state="unchecked"']},
  {key: 'indeterminate', values: [null, 'state="indeterminate"']},
  {key: 'vertical', values: ['orientation="vertical"']},
  {key: 'horizontal', values: ['orientation="horizontal"']},
  {key: 'placement-top', values: ['placement="top"']},
  {key: 'placement-top-end', values: ['placement="top-end"']},
  {key: 'placement-top-start', values: ['placement="top-start"']},
  {key: 'placement-left', values: ['placement="left"']},
  {key: 'placement-left-end', values: ['placement="left-end"']},
  {key: 'placement-left-start', values: ['placement="left-start"']},
  {key: 'placement-right', values: ['placement="right"']},
  {key: 'placement-right-end', values: ['placement="right-end"']},
  {key: 'placement-right-start', values: ['placement="right-start"']},
  {key: 'placement-bottom', values: ['placement="bottom"']},
  {key: 'placement-bottom-end', values: ['placement="bottom-end"']},
  {key: 'placement-bottom-start', values: ['placement="bottom-start"']},
  {key: 'side-top', values: ['side="top"']},
  {key: 'side-left', values: ['side="left"']},
  {key: 'side-right', values: ['side="right"']},
  {key: 'side-bottom', values: ['side="bottom"']},
  {key: 'align-center', values: ['align="center"']},
  {key: 'align-start', values: ['align="start"']},
  {key: 'align-end', values: ['align="end"']},
  {key: 'now', values: [null]},
  {key: 'today', values: [null]},
  {key: 'weekend', values: [null]},
  {key: 'in-range', values: [null]},
  {key: 'out-of-range', values: ['outside-range']},
  {key: 'range-start', values: [null]},
  {key: 'range-end', values: [null]},
  {key: 'unavailable', values: [null]},
  {key: 'topmost', values: [null]},
  {key: 'view-day', values: ['view="day"']},
  {key: 'view-month', values: ['view="month"']},
  {key: 'view-year', values: ['view="year"']},
  {key: 'under-value', values: ['state="under-value"']},
  {key: 'over-value', values: ['state="over-value"']},
  {key: 'at-value', values: ['state="at-value"']},
  {key: 'delete-intent', values: [null]},
  {key: 'unit-hour', values: ['unit="hour"']},
  {key: 'unit-minute', values: ['unit="minute"']},
  {key: 'unit-second', values: ['unit="second"']},
  {key: 'unit-period', values: ['unit="period"']},
  {key: 'channel-hue', values: ['channel="hue"']},
  {key: 'channel-saturation', values: ['channel="saturation"']},
  {key: 'channel-brightness', values: ['channel="brightness"']},
  {key: 'channel-lightness', values: ['channel="lightness"']},
  {key: 'channel-red', values: ['channel="red"']},
  {key: 'channel-green', values: ['channel="green"']},
  {key: 'channel-blue', values: ['channel="blue"']},
  {key: 'channel-alpha', values: ['channel="alpha"']},
  {key: 'channel-hex', values: ['channel="hex"']},
  {key: 'channel-css', values: ['channel="css"']},
  {key: 'tour-highlighted', values: [null]},
  {key: 'scroll-lock', values: [null]},
  {key: 'inert', values: [null]},
  {key: 'empty', values: [null]},
  {key: 'fullscreen', values: [null]},
  {key: 'loading', values: [null]},
];

export interface DynamicVariantEntry {
  key: string;
  validate?(subject: string): boolean;
  knownValues?: Record<string, string>;
}

const DEFAULT_DYNAMIC_VARIANT_ENTRY_KNOWN_INT_VALUES = Array.from<never>({
  length: 10,
}).reduce<Record<string, string>>((o, _v, i) => {
  o[i] = i.toString();
  return o;
}, {});

function isInt(subject: string) {
  return !Number.isNaN(Number.parseInt(subject));
}

const DYNAMIC_VARIANT_ENTRIES: DynamicVariantEntry[] = [
  {key: 'scope'},
  {key: 'part'},
  {key: 'value'},
  {key: 'valuetext'},
  {
    key: 'index',
    validate: isInt,
    knownValues: DEFAULT_DYNAMIC_VARIANT_ENTRY_KNOWN_INT_VALUES,
  },
  {
    key: 'columns',
    validate: isInt,
    knownValues: DEFAULT_DYNAMIC_VARIANT_ENTRY_KNOWN_INT_VALUES,
  },
  {key: 'branch'},
  {
    key: 'depth',
    validate: isInt,
    knownValues: DEFAULT_DYNAMIC_VARIANT_ENTRY_KNOWN_INT_VALUES,
  },
  {
    key: 'path',
    validate: isInt,
    knownValues: DEFAULT_DYNAMIC_VARIANT_ENTRY_KNOWN_INT_VALUES,
  },
  {
    key: 'type',
    knownValues: {
      /* toast */
      info: 'info',
      error: 'error',
      warning: 'warning',
      success: 'success',
      loading: 'loading',
      /* tour */
      floating: 'floating',
      tooltip: 'tooltip',
      dialog: 'dialog',
      wait: 'wait',
    },
  },
];

export interface ZagPluginOptions {
  /**
   * @description The prefix for the variants.
   * @default "ui"
   * @example
   * ```tsx
   * <Dialog.Content class="ui-open:animate-fade-in ui-closed:animate-fade-out">
   * 	...
   * </Dialog.Content>
   * ```
   */
  prefix?: string;
}

/**
 * @see https://github.com/calvo-jp/tailwindcss-plugin-zag
 */
export default plugin.withOptions<ZagPluginOptions>((config = {}) => {
  const prefix = config.prefix ?? 'ui';

  return ({addVariant, matchVariant}) => {
    for (const {key, values} of STATIC_VARIANT_ENTRIES) {
      addVariant(
        `${prefix}-${key}`,
        values.map((value) =>
          value === null ? `&[data-${key}]` : `&[data-${value}]`,
        ),
      );

      addVariant(
        `${prefix}-not-${key}`,
        values.map((value) =>
          value === null ? `&:not([data-${key}])` : `&:not([data-${value}])`,
        ),
      );

      addVariant(
        `${prefix}-group-${key}`,
        values.map((value) =>
          value === null ? `.group[data-${key}] &` : `.group[data-${value}] &`,
        ),
      );

      addVariant(
        `${prefix}-peer-${key}`,
        values.map((value) =>
          value === null
            ? `.peer[data-${key}] ~ &`
            : `.peer[data-${value}] ~ &`,
        ),
      );
    }

    for (const {key, knownValues, validate} of DYNAMIC_VARIANT_ENTRIES) {
      const isValid = validate ?? (() => true);

      matchVariant(
        `${prefix}-${key}`,
        (value) => (!isValid(value) ? [] : `&[data-${key}="${value}"]`),
        {values: knownValues},
      );

      matchVariant(
        `${prefix}-not-${key}`,
        (value) => (!isValid(value) ? [] : `&:not([data-${key}="${value}"])`),
        {values: knownValues},
      );

      matchVariant(
        `${prefix}-group-${key}`,
        (value) => (!isValid(value) ? [] : `.group[data-${key}="${value}"] &`),
        {values: knownValues},
      );

      matchVariant(
        `${prefix}-peer-${key}`,
        (value) =>
          !isValid(value) ? [] : `.peer[data-${value}="${value}"] ~ &`,
        {values: knownValues},
      );
    }
  };
});
