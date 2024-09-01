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

- 🟢 [Accordion](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/accordion.md)
- 🟢 [Avatar](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/avatar.md)
- 🟢 [Carousel](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/carousel.md)
- 🟢 [Checkbox](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/checkbox.md)
- 🟢 [Clipboard](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/clipboard.md)
- 🟢 [Collapsible](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/collapsible.md)
- ⚪ [ColorPicker](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/colorPicker.md)
- 🟢 [Combobox](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/combobox.md)
- 🟢 [DatePicker](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/datePicker.md)
- 🟢 [Dialog](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/dialog.md)
- 🟢 [Editable](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/editable.md)
- 🟢 [Field](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/field.md)
- 🟢 [FileUpload](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/file-upload.md)
- ⚪ [FloatingPanel](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/floating-panel.md)
- 🟢 [HoverCard](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/hover-card.md)
- 🟢 [Menu](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/menu.md)
- 🟢 [NumberInput](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/number-input.md)
- 🟢 [Pagination](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/pagination.md)
- 🟢 [PinInput](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/pin-input.md)
- 🟢 [Popover](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/popover.md)
- 🟢 [Portal](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/portal.md)
- ⚪ [Presence](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/presence.md)
- 🟢 [Progress](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/progress.md)
- 🟢 [QRCode](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/qr-code.md)
- 🟢 [RadioGroup](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/radio-group.md)
- 🟢 [RatingGroup](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/rating-group.md)
- 🟢 [Select](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/select.md)
- 🟢 [SegmentGroup](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/segment-group.md)
- 🟢 [SignaturePad](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/signature-pad.md)
- 🟢 [Slider](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/slider.md)
- 🟢 [Splitter](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/splitter.md)
- 🟢 [Steps](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/steps.md)
- 🟢 [Switch](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/switch.md)
- 🟢 [Tabs](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/tabs.md)
- 🟢 [TagsInput](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/tags-input.md)
- 🟢 [TimePicker](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/time-picker.md)
- 🟢 [Timer](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/timer.md)
- 🟢 [Toast](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/toast.md)
- 🟢 [ToggleGroup](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/toggle-group.md)
- 🟢 [Tooltip](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/tooltip.md)
- ⚪ [Tour](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/tour.md)
- 🟢 [TreeView](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/tree-view.md)

View components demo [here](https://ui-ingredients.vercel.app/)
