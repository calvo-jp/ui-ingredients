---
id: angle-slider
title: Angle Slider
description: An Angle Slider Component is a circular UI control for selecting or adjusting angular values, typically in degrees, by dragging a handle along a curve.
---

## Usage

```svelte
<script>
  import {AngleSlider} from 'ui-ingredients';

  let degrees = [0, 45, 90, 135, 180, 225, 270, 315];
</script>

<AngleSlider.Root>
  <AngleSlider.Label>Label</AngleSlider.Label>
  <AngleSlider.Control>
    <AngleSlider.MarkerGroup>
      {#each degrees as value}
        <AngleSlider.Marker {value} />
      {/each}
    </AngleSlider.MarkerGroup>
    <AngleSlider.Thumb />
  </AngleSlider.Control>
  <AngleSlider.ValueText />
  <AngleSlider.HiddenInput />
</AngleSlider.Root>
```
