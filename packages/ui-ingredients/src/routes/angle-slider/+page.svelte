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

<style>
  :global([data-scope='angle-slider'][data-part='label']) {
    display: block;
    margin-bottom: 12px;
    text-align: center;
  }

  :global([data-scope='angle-slider'][data-part='root']) {
    max-width: 125px;
  }

  :global([data-scope='angle-slider'][data-part='control']) {
    width: 100%;
    aspect-ratio: 1;
    position: relative;
  }

  :global([data-scope='angle-slider'][data-part='marker-group']) {
    position: absolute;
    width: 100%;
    height: 100%;
    background: oklch(0.985 0 0);
    border-radius: 9999px;
  }

  :global([data-scope='angle-slider'][data-part='marker']) {
    position: absolute;
    bottom: 0;
    left: calc(50% - 1px);
    right: 0;
    top: 0;
    width: 2px;
    height: 100%;
    transition: all 250ms;
  }

  :global([data-scope='angle-slider'][data-part='marker']::before) {
    content: '';
    position: absolute;
    height: 16px;
    width: 2px;
    background: oklch(0.828 0.111 230.318);
  }

  :global(
    [data-scope='angle-slider'][data-part='marker'][data-state='under-value']::before
  ) {
    background: oklch(0.746 0.16 232.661);
  }

  :global([data-scope='angle-slider'][data-part='thumb']) {
    position: absolute;
    bottom: 0;
    left: calc(50% - 2px);
    right: 0;
    top: 0;
    width: 4px;
    height: 100%;
    transition: all 250ms;
  }

  :global([data-scope='angle-slider'][data-part='thumb']::before) {
    content: '';
    position: absolute;
    height: 28px;
    width: 4px;
    background: oklch(0.746 0.16 232.661);
  }

  :global([data-scope='angle-slider'][data-part='value-text']) {
    display: block;
    margin-top: 12px;
    text-align: center;
  }
</style>
