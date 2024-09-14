# UI Ingredients

Headless component library for [Svelte](https://svelte.dev/) powered by [zag](https://zagjs.com/)

> ⚠️ This project is currently in the early stages of development. You're welcome to use it and we encourage contributions. Please use with caution as it is still evolving!

## Installation

```bash
npm install ui-ingredients
# yarn add ui-ingredients
# pnpm add ui-ingredients
```

## Usage

```svelte
<script>
  import {Dialog, Portal} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';
</script>

<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>

  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.Description>Description</Dialog.Description>
        <Dialog.CloseTrigger>
          <XCloseIcon />
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
```

## Documentation

- [Accordion](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/accordion.md)
- [Avatar](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/avatar.md)
- [Carousel](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/carousel.md)
- [Checkbox](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/checkbox.md)
- [Clipboard](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/clipboard.md)
- [Collapsible](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/collapsible.md)
- [Combobox](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/combobox.md)
- [DatePicker](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/date-picker.md)
- [Dialog](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/dialog.md)
- [Editable](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/editable.md)
- [Field](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/field.md)
- [FileUpload](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/file-upload.md)
- [FloatingPanel](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/floating-panel.md)
- [Highlight](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/highlight.md)
- [HoverCard](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/hover-card.md)
- [Menu](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/menu.md)
- [NumberInput](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/number-input.md)
- [Pagination](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/pagination.md)
- [PinInput](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/pin-input.md)
- [Popover](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/popover.md)
- [Portal](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/portal.md)
- [Presence](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/presence.md)
- [Progress](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/progress.md)
- [QrCode](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/qr-code.md)
- [RadioGroup](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/radio-group.md)
- [RatingGroup](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/rating-group.md)
- [Select](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/select.md)
- [SegmentGroup](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/segment-group.md)
- [SignaturePad](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/signature-pad.md)
- [Slider](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/slider.md)
- [Splitter](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/splitter.md)
- [Steps](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/steps.md)
- [Switch](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/switch.md)
- [Tabs](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/tabs.md)
- [TagsInput](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/tags-input.md)
- [TimePicker](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/time-picker.md)
- [Timer](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/timer.md)
- [Toast](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/toast.md)
- [ToggleGroup](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/toggle-group.md)
- [Tooltip](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/tooltip.md)
- [TreeView](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/tree-view.md)
- [Tour](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/tour.md)
- [The `asChild` prop](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/aschild.md)
- [Styling](https://github.com/calvo-jp/ui-ingredients/blob/main/docs/styling.md)

## Credits

- [zag](https://zagjs.com/) - The fantastic library that powers UI ingredients
- [ark](https://ark-ui.com/) - The outstanding headless component library that greatly inspired this one

## Demo

View components demo [here](https://ui-ingredients.vercel.app/)
