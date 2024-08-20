<script lang="ts">
  import {Slider} from '$lib/index.js';

  let value = $state([0, 25]);
</script>

<Slider.Root
  class="flex max-w-[20rem] flex-col gap-1"
  min={0}
  max={100}
  {value}
  onValueChangeEnd={({value}) => {
    console.log({value});
  }}
>
  <Slider.Label>Label</Slider.Label>
  <Slider.ValueText class="text-sm text-neutral-500" />

  <Slider.Control class="relative mt-3 flex items-center">
    <Slider.Track class="h-3 grow overflow-hidden rounded-full bg-neutral-600">
      <Slider.Range class="h-4 bg-indigo-500" />
    </Slider.Track>
    <Slider.Thumb index={0} class="size-5 rounded-full bg-white shadow-md">
      <Slider.HiddenInput />
    </Slider.Thumb>
    <Slider.Thumb index={1} class="size-5 rounded-full bg-white shadow-md">
      <Slider.HiddenInput />
    </Slider.Thumb>
  </Slider.Control>

  <Slider.MarkerGroup class="mt-1 text-sm font-medium text-neutral-500">
    <Slider.Marker value={25}>25</Slider.Marker>
    <Slider.Marker value={50}>50</Slider.Marker>
    <Slider.Marker value={75}>75</Slider.Marker>
  </Slider.MarkerGroup>
</Slider.Root>
