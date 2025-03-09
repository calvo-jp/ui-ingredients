<script lang="ts">
  import {Slider} from '$lib/index.js';

  let value = $state([0, 25]);

  $inspect(value);
</script>

<Slider.Root
  min={0}
  max={100}
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <Slider.Label>Label</Slider.Label>

  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb index={0}>
      <Slider.HiddenInput />
    </Slider.Thumb>
    <Slider.Thumb index={1}>
      <Slider.HiddenInput />
    </Slider.Thumb>
  </Slider.Control>

  <Slider.MarkerGroup>
    <Slider.Marker value={25}>25</Slider.Marker>
    <Slider.Marker value={50}>50</Slider.Marker>
    <Slider.Marker value={75}>75</Slider.Marker>
  </Slider.MarkerGroup>
</Slider.Root>

<style>
  :global([data-scope='slider'][data-part='label']) {
    display: block;
    margin-bottom: 12px;
  }

  :global([data-scope='slider'][data-part='root']) {
    max-width: 325px;
  }

  :global([data-scope='slider'][data-part='control']) {
    position: relative;
    display: flex;
    align-items: center;
  }

  :global([data-scope='slider'][data-part='track']) {
    height: 12px;
    width: 100%;
    border-radius: 9999px;
    background: oklch(0.922 0 0);
  }

  :global([data-scope='slider'][data-part='range']) {
    height: 12px;
    border-radius: 9999px;
    background: oklch(0.746 0.16 232.661);
  }

  :global([data-scope='slider'][data-part='thumb']) {
    width: 20px;
    height: 20px;
    border-radius: 9999px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  :global([data-scope='slider'][data-part='marker-group']) {
    margin-top: 6px;
    font-size: 14px;
    font-weight: 500;
    color: oklch(0.439 0 0);
  }
</style>
