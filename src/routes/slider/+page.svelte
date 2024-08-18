<script lang="ts">
  import {Slider} from '$lib/index.js';

  let value = $state([0, 25]);
</script>

<Slider.Root
  class="max-w-[20rem] flex flex-col gap-1"
  min={0}
  max={100}
  {value}
  onValueChangeEnd={({value}) => {
    console.log({value});
  }}
>
  <Slider.Label>Label</Slider.Label>
  <Slider.ValueText class="text-sm text-gray-400" />

  <Slider.Control class="mt-3 relative flex items-center">
    <Slider.Track class="bg-gray-200 h-4 grow rounded-full overflow-hidden">
      <Slider.Range class="bg-sky-400 h-4" />
    </Slider.Track>
    <Slider.Thumb index={0} class="bg-white shadow-md rounded-full size-8">
      <Slider.HiddenInput />
    </Slider.Thumb>
    <Slider.Thumb index={1} class="bg-white shadow-md rounded-full size-8">
      <Slider.HiddenInput />
    </Slider.Thumb>
  </Slider.Control>

  <Slider.MarkerGroup class="mt-1 text-sm text-gray-400">
    <Slider.Marker value={25}>25</Slider.Marker>
    <Slider.Marker value={50}>50</Slider.Marker>
    <Slider.Marker value={75}>75</Slider.Marker>
  </Slider.MarkerGroup>
</Slider.Root>
