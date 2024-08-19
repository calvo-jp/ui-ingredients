# Svelte UI

Headless component library for [Svelte](https://svelte.dev/) powered by [zag](https://zagjs.com/)

## Installation

```bash
npm install sheesh-ui
```

## Usage

```svelte
<script>
  import {Clipboard} from 'sheesh-ui';

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
- ⚪ ColorPicker
- 🟢 Combobox
- 🟡 DatePicker
- 🟢 Dialog
- ⚪ Editable
- ⚪ FileUpload
- 🟢 HoverCard
- 🟡 Menu
- 🟢 NumberInput
- 🟢 Pagination
- 🟢 PinInput
- 🟢 Popover
- 🟢 Portal
- 🟢 Presence
- 🟢 Progress
- ⚪ QRCode
- 🟢 RadioGroup
- ⚪ RatingGroup
- 🟢 Select
- ⚪ SignaturePad
- 🟢 Slider
- ⚪ Splitter
- ⚪ Steps
- 🟢 Switch
- 🟢 Tabs
- 🟡 TagsInput
- ⚪ Timer
- 🟢 Toast
- 🟢 ToggleGroup
- 🟢 Tooltip
