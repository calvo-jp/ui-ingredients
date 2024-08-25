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

- 🟢 Accordion
- 🟢 Avatar
- 🟢 Carousel
- 🟢 Checkbox
- 🟢 Clipboard
- 🟢 Collapsible
- 🟡 ColorPicker
- 🟢 Combobox
- 🟢 DatePicker
- 🟢 Dialog
- 🟢 Editable
- 🟢 FileUpload
- ⚪ FloatingPanel
- 🟢 HoverCard
- 🟢 Menu
- 🟢 NumberInput
- 🟢 Pagination
- 🟢 PinInput
- 🟢 Popover
- 🟢 Portal
- ⚪ Presence
- 🟢 Progress
- 🟢 QRCode
- 🟢 RadioGroup
- 🟢 RatingGroup
- 🟢 Select
- 🟢 SegmentGroup
- ⚪ SignaturePad
- 🟢 Slider
- ⚪ Splitter
- 🟢 Steps
- 🟢 Switch
- 🟢 Tabs
- 🟢 TagsInput
- 🟡 TimePicker
- 🟢 Timer
- 🟢 Toast
- 🟢 ToggleGroup
- 🟢 Tooltip
- ⚪ Tour
- 🟡 TreeView

View components demo [here](https://ui-ingredients.vercel.app/)
