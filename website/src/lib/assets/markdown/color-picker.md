---
title: Color Picker
description: A component for selecting and customizing colors.
---

## Usage

```svelte
<script>
  import {ColorPicker} from 'ui-ingredients';
  import {DropperIcon} from '$lib/icons';

  let presets = [
    'hsl(10, 81%, 59%)',
    'hsl(60, 81%, 59%)',
    'hsl(100, 81%, 59%)',
    'hsl(175, 81%, 59%)',
    'hsl(190, 81%, 59%)',
    'hsl(205, 81%, 59%)',
    'hsl(220, 81%, 59%)',
    'hsl(250, 81%, 59%)',
    'hsl(280, 81%, 59%)',
    'hsl(350, 81%, 59%)',
  ];

  /** @type {import('ui-ingredients').Color} */
  let value = $state(ColorPicker.parse('red'));
</script>

<ColorPicker.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  {#snippet children(context)}
    <ColorPicker.Label>Label</ColorPicker.Label>
    <ColorPicker.Control>
      <ColorPicker.ChannelInput channel="hex" />
      <ColorPicker.Trigger>
        <ColorPicker.Swatch value={context.value} />
      </ColorPicker.Trigger>
    </ColorPicker.Control>

    <ColorPicker.Positioner>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaBackground />
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>

        <ColorPicker.EyeDropperTrigger>
          <DropperIcon />
        </ColorPicker.EyeDropperTrigger>

        <ColorPicker.ChannelSlider channel="hue">
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>

        <ColorPicker.ChannelSlider channel="alpha">
          <ColorPicker.TransparencyGrid size="8px" />
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>

        <ColorPicker.ChannelInput channel="hex" />
        <ColorPicker.ChannelInput channel="alpha" />

        <ColorPicker.SwatchGroup>
          {#each presets as color}
            <ColorPicker.SwatchTrigger value={color}>
              <ColorPicker.Swatch value={color} />
            </ColorPicker.SwatchTrigger>
          {/each}
        </ColorPicker.SwatchGroup>
      </ColorPicker.Content>
    </ColorPicker.Positioner>
  {/snippet}
</ColorPicker.Root>
```
