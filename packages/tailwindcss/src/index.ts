import plugin from 'tailwindcss/plugin.js';

interface Entry {
  key: string;
  values: (string | null)[];
}

const ENTRIES: Entry[] = [
  {key: 'hover', values: [null]},
  {key: 'focus', values: [null]},
  {key: 'focus-visible', values: [null]},
  {key: 'focusable', values: [null]},
  {key: 'active', values: [null]},
  {key: 'invalid', values: [null]},
  {key: 'disabled', values: [null]},
  {key: 'readonly', values: [null]},
  {key: 'current', values: [null]},
  {key: 'inview', values: [null]},
  {key: 'copied', values: [null]},
  {key: 'collapsible', values: [null]},
  {key: 'highlighted', values: [null]},
  {key: 'today', values: [null]},
  {key: 'weekend', values: [null]},
  {key: 'in-range', values: [null]},
  {key: 'range-start', values: [null]},
  {key: 'range-end', values: [null]},
  {key: 'selected', values: [null]},
  {key: 'placeholder-shown', values: [null]},
  {key: 'autoresize', values: [null]},
  {key: 'required', values: [null]},
  {key: 'dragging', values: [null]},
  {key: 'complete', values: [null]},
  {key: 'incomplete', values: [null]},
  {key: 'expanded', values: [null]},
  {key: 'half', values: [null]},
  {key: 'null', values: [null]},
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
  {key: 'hidden', values: ['state="hidden"']},
  {key: 'visible', values: ['state="visible"']},
  {key: 'checked', values: ['state="checked"', null]},
  {key: 'unchecked', values: ['state="unchecked"', null]},
  {key: 'indeterminate', values: ['state="indeterminate"']},
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
  {key: 'view-day', values: ['view="day"']},
  {key: 'view-month', values: ['view="month"']},
  {key: 'view-year', values: ['view="year"']},
  {key: 'type-info', values: ['type="info"']},
  {key: 'type-error', values: ['type="error"']},
  {key: 'type-success', values: ['type="success"']},
  {key: 'type-warning', values: ['type="warning"']},
  {key: 'type-loading', values: ['type="loading"']},
  {key: 'type-tooltip', values: ['type="tooltip"']},
  {key: 'type-dialog', values: ['type="dialog"']},
  {key: 'type-floating', values: ['type="floating"']},
  {key: 'type-wait', values: ['type="wait"']},
  {key: 'under-value', values: ['state="under-value"']},
  {key: 'over-value', values: ['state="over-value"']},
];

export default plugin.withOptions<{prefix?: string}>((config = {}) => {
  const prefix = config.prefix ?? 'ui';

  return ({addVariant}) => {
    ENTRIES.forEach(({key, values}) => {
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
        `${prefix}-peer-${key}`,
        values.map((value) =>
          value === null
            ? `:merge(.peer)[data-${key}] ~ &`
            : `:merge(.peer)[data-${value}] ~ &`,
        ),
      );

      addVariant(
        `${prefix}-group-${key}`,
        values.map((value) =>
          value === null
            ? `:merge(.group)[data-${key}] &`
            : `:merge(.group)[data-${value}] &`,
        ),
      );
    });
  };
});
