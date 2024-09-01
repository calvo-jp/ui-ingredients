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
- 🟢 [Checkbox](./docs/checkbox.md)
- 🟢 [Clipboard](./docs/clipboard.md)
- 🟢 [Collapsible](./docs/collapsible.md)
- ⚪ [ColorPicker](./docs/colorPicker.md)
- 🟢 [Combobox](./docs/combobox.md)
- 🟢 [DatePicker](./docs/datePicker.md)
- 🟢 [Dialog](./docs/dialog.md)
- 🟢 [Editable](./docs/editable.md)
- 🟢 [Field](./docs/field.md)
- 🟢 [FileUpload](./docs/file-upload.md)
- ⚪ [FloatingPanel](./docs/floating-panel.md)
- 🟢 [HoverCard](./docs/hover-card.md)
- 🟢 [Menu](./docs/menu.md)
- 🟢 [NumberInput](./docs/number-input.md)
- 🟢 [Pagination](./docs/pagination.md)
- 🟢 [PinInput](./docs/pin-input.md)
- 🟢 [Popover](./docs/popover.md)
- 🟢 [Portal](./docs/portal.md)
- ⚪ [Presence](./docs/presence.md)
- 🟢 [Progress](./docs/progress.md)
- 🟢 [QRCode](./docs/qr-code.md)
- 🟢 [RadioGroup](./docs/radio-group.md)
- 🟢 [RatingGroup](./docs/rating-group.md)
- 🟢 [Select](./docs/select.md)
- 🟢 [SegmentGroup](./docs/segment-group.md)
- 🟢 [SignaturePad](./docs/signature-pad.md)
- 🟢 [Slider](./docs/slider.md)
- 🟢 [Splitter](./docs/splitter.md)
- 🟢 [Steps](./docs/steps.md)
- 🟢 [Switch](./docs/switch.md)
- 🟢 [Tabs](./docs/tabs.md)
- 🟢 [TagsInput](./docs/tags-input.md)
- 🟢 [TimePicker](./docs/time-picker.md)
- 🟢 [Timer](./docs/timer.md)
- 🟢 [Toast](./docs/toast.md)
- 🟢 [ToggleGroup](./docs/toggle-group.md)
- 🟢 [Tooltip](./docs/tooltip.md)
- ⚪ [Tour](./docs/tour.md)
- 🟢 [TreeView](./docs/tree-view.md)

View components demo [here](https://ui-ingredients.vercel.app/)
