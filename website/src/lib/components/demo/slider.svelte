<script lang="ts">
  import Label from '$lib/components/ui/label.svelte';
  import {Slider} from 'ui-ingredients';
</script>

<Slider.Root
  class="mx-auto max-w-[20rem] pb-5"
  min={0}
  max={100}
  defaultValue={[0, 50]}
>
  <Slider.Label>
    {#snippet asChild(attrs)}
      <Label {...attrs}>Label</Label>
    {/snippet}
  </Slider.Label>

  <Slider.Control class="relative mt-2 flex items-center">
    <Slider.Track
      class="h-3 grow overflow-hidden rounded-full bg-neutral-300 dark:bg-neutral-800"
    >
      <Slider.Range class="h-4 bg-indigo-600 dark:bg-indigo-500" />
    </Slider.Track>
    <Slider.Thumb index={0} class="size-5 rounded-full bg-white shadow-md">
      <Slider.HiddenInput />
    </Slider.Thumb>
    <Slider.Thumb index={1} class="size-5 rounded-full bg-white shadow-md">
      <Slider.HiddenInput />
    </Slider.Thumb>
  </Slider.Control>

  <Slider.MarkerGroup
    class="mt-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400"
  >
    <Slider.Marker value={25}>25</Slider.Marker>
    <Slider.Marker value={50}>50</Slider.Marker>
    <Slider.Marker value={75}>75</Slider.Marker>
  </Slider.MarkerGroup>
</Slider.Root>
