<script lang="ts">
  import {AngleSlider} from 'ui-ingredients';
  import Label from '../shared/label.svelte';

  let degrees = [0, 45, 90, 135, 180, 225, 270, 315];
</script>

<AngleSlider.Root class="w-36">
  <AngleSlider.Label class="mb-3 block text-center">
    {#snippet asChild(attrs)}
      <Label {...attrs}>Wind Direction</Label>
    {/snippet}
  </AngleSlider.Label>

  <AngleSlider.Control class="relative size-36 rounded-full bg-neutral-700/25">
    <AngleSlider.MarkerGroup class="absolute size-full">
      {#each degrees as value}
        <AngleSlider.Marker
          {value}
          class="duration-250 data-under-value:before:bg-indigo-500 absolute bottom-0 left-[calc(50%-1px)] right-0 top-0 size-full w-[2px] transition-colors before:absolute before:h-6 before:w-[2px] before:bg-neutral-700"
        />
      {/each}
    </AngleSlider.MarkerGroup>
    <AngleSlider.Thumb
      class="absolute bottom-0 left-[calc(50%-2px)] right-0 top-0 size-full w-[4px] outline-none before:absolute before:h-9 before:w-[4px] before:bg-indigo-500"
    />
  </AngleSlider.Control>
  <AngleSlider.ValueText class="mt-3 block text-center" />
  <AngleSlider.HiddenInput />
</AngleSlider.Root>
