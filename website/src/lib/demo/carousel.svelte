<script lang="ts">
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@untitled-theme/icons-svelte';
  import {Carousel} from 'ui-ingredients';

  let items = Array.from({length: 3});
</script>

<Carousel.Root autoplay loop allowMouseDrag class="mx-auto max-w-[32rem]">
  <Carousel.ItemGroup>
    {#each items, index}
      <Carousel.Item
        {index}
        class="flex h-[14rem] items-center justify-center rounded bg-white font-mono text-4xl font-bold dark:bg-neutral-700/25 lg:h-[16rem]"
      >
        {index + 1}
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>

  <Carousel.Control class="mx-auto mt-5 flex w-fit items-center gap-2">
    <Carousel.PrevTrigger
      class="disabled:cursor-not-allowed disabled:opacity-50"
    >
      <ChevronLeftIcon class="size-5" />
    </Carousel.PrevTrigger>
    <Carousel.IndicatorGroup class="flex items-center justify-center gap-2">
      {#each items, index}
        <Carousel.Indicator
          {index}
          class="size-3 rounded-full border border-neutral-200 bg-white transition-colors duration-150 ui-current:border-indigo-600 ui-current:bg-indigo-600 dark:border-0 dark:bg-neutral-800 dark:ui-current:bg-indigo-500"
        />
      {/each}
    </Carousel.IndicatorGroup>
    <Carousel.NextTrigger
      class="disabled:cursor-not-allowed disabled:opacity-50"
    >
      <ChevronRightIcon class="size-5" />
    </Carousel.NextTrigger>
  </Carousel.Control>
</Carousel.Root>
