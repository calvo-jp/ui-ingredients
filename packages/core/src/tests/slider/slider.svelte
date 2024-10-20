<script lang="ts">
  import {Slider} from '$lib/index.js';
</script>

<Slider.Root>
  <Slider.Label>Label</Slider.Label>
  <Slider.ValueText />

  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb index={0}>
      <Slider.HiddenInput />
      <Slider.DraggingIndicator />
    </Slider.Thumb>
  </Slider.Control>

  <Slider.MarkerGroup>
    <Slider.Marker value={25}>25</Slider.Marker>
    <Slider.Marker value={50}>50</Slider.Marker>
    <Slider.Marker value={75}>75</Slider.Marker>
  </Slider.MarkerGroup>
</Slider.Root>
