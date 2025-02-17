<script lang="ts">
  import {Slider} from '$lib/index.js';

  let value = $state([0, 25]);
</script>

<Slider.Root
  min={0}
  max={100}
  {value}
  onValueChangeEnd={(detail) => {
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
