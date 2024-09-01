# UI Ingredients

Headless component library for [Svelte](https://svelte.dev/) powered by [zag](https://zagjs.com/)

## Installation

```bash
npm install ui-ingredients
```

## Usage

```svelte
<script>
  import {Clipboard} from 'ui-ingredients';

  let {data} = $props();
</script>

<Clipboard.Root value={data.token}>
  <Clipboard.Label>Token</Clipboard.Label>
  <Clipboard.Control>
    <Clipboard.Input />
    <Clipboard.Trigger>
      <Clipboard.Indicator copied>
        <CheckIcon />
      </Clipboard.Indicator>
      <Clipboard.Indicator>
        <CopyIcon />
      </Clipboard.Indicator>
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
```

## Components

- 🟢 [Accordion](./docs/accordion.md)
- 🟢 [Avatar](./docs/avatar.md)
- 🟢 [Carousel](./docs/carousel.md)
- 🟢 [Checkbox](./docs/checkbox)
- 🟢 [Clipboard](./docs/clipboard)
- 🟢 [Collapsible](./docs/collapsible)
- ⚪ [ColorPicker](./docs/colorPicker)
- 🟢 [Combobox](./docs/combobox)
- 🟢 [DatePicker](./docs/datePicker)
- 🟢 [Dialog](./docs/dialog)
- 🟢 [Editable](./docs/editable)
- 🟢 [Field](./docs/field)
- 🟢 [FileUpload](./docs/file-upload)
- ⚪ [FloatingPanel](./docs/floating-panel)
- 🟢 [HoverCard](./docs/hover-card)
- 🟢 [Menu](./docs/menu)
- 🟢 [NumberInput](./docs/number-input)
- 🟢 [Pagination](./docs/pagination)
- 🟢 [PinInput](./docs/pin-input)
- 🟢 [Popover](./docs/popover)
- 🟢 [Portal](./docs/portal)
- ⚪ [Presence](./docs/presence)
- 🟢 [Progress](./docs/progress)
- 🟢 [QRCode](./docs/qr-code)
- 🟢 [RadioGroup](./docs/radio-group)
- 🟢 [RatingGroup](./docs/rating-group)
- 🟢 [Select](./docs/select)
- 🟢 [SegmentGroup](./docs/segment-group)
- 🟢 [SignaturePad](./docs/signature-pad)
- 🟢 [Slider](./docs/slider)
- 🟢 [Splitter](./docs/splitter)
- 🟢 [Steps](./docs/steps)
- 🟢 [Switch](./docs/switch)
- 🟢 [Tabs](./docs/tabs)
- 🟢 [TagsInput](./docs/tags-input)
- 🟢 [TimePicker](./docs/time-picker)
- 🟢 [Timer](./docs/timer)
- 🟢 [Toast](./docs/toast)
- 🟢 [ToggleGroup](./docs/toggle-group)
- 🟢 [Tooltip](./docs/tooltip)
- ⚪ [Tour](./docs/tour)
- 🟢 [TreeView](./docs/tree-view)

View components demo [here](https://ui-ingredients.vercel.app/)
