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
  <Slider.ValueText class="text-sm text-neutral-500" />

  <Slider.Control class="mt-3 relative flex items-center">
    <Slider.Track class="bg-neutral-600 h-3 grow rounded-full overflow-hidden">
      <Slider.Range class="bg-indigo-500 h-4" />
    </Slider.Track>
    <Slider.Thumb index={0} class="bg-white shadow-md rounded-full size-5">
      <Slider.HiddenInput />
    </Slider.Thumb>
    <Slider.Thumb index={1} class="bg-white shadow-md rounded-full size-5">
      <Slider.HiddenInput />
    </Slider.Thumb>
  </Slider.Control>

  <Slider.MarkerGroup class="mt-1 text-sm text-neutral-500 font-medium">
    <Slider.Marker value={25}>25</Slider.Marker>
    <Slider.Marker value={50}>50</Slider.Marker>
    <Slider.Marker value={75}>75</Slider.Marker>
  </Slider.MarkerGroup>
</Slider.Root>
