<script lang="ts">
  import {AngleSlider} from '$lib/index.js';

  let degrees = [0, 45, 90, 135, 180, 225, 270, 315];
</script>

<AngleSlider.Root>
  <AngleSlider.Label>Wind Direction</AngleSlider.Label>
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
