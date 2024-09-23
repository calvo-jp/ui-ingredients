<script lang="ts">
  import {Slider} from '$lib/index.js';
  import {Label} from '../shared/index.js';

  let value = $state([0, 25]);
</script>

<Slider.Root
  class="w-full lg:max-w-[24rem]"
  min={0}
  max={100}
  {value}
  onValueChangeEnd={(detail) => {
    value = detail.value;
  }}
>
  <Slider.Label>
    {#snippet asChild(attrs)}
      <Label {...attrs}>Label</Label>
    {/snippet}
  </Slider.Label>

  <Slider.Control class="relative mt-2 flex items-center">
    <Slider.Track class="bg-disabled h-3 grow overflow-hidden rounded-full">
      <Slider.Range class="bg-accent h-4" />
    </Slider.Track>
    <Slider.Thumb index={0} class="size-5 rounded-full bg-white shadow-md">
      <Slider.HiddenInput />
    </Slider.Thumb>
    <Slider.Thumb index={1} class="size-5 rounded-full bg-white shadow-md">
      <Slider.HiddenInput />
    </Slider.Thumb>
  </Slider.Control>

  <Slider.MarkerGroup class="text-muted mt-2 text-sm font-semibold">
    <Slider.Marker value={25}>25</Slider.Marker>
    <Slider.Marker value={50}>50</Slider.Marker>
    <Slider.Marker value={75}>75</Slider.Marker>
  </Slider.MarkerGroup>
</Slider.Root>
