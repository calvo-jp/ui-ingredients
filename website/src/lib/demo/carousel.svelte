<script lang="ts">
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@untitled-theme/icons-svelte';
  import {Carousel} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Carousel.Root class="mx-auto max-w-[32rem]">
    <Carousel.Viewport
      class="overflow-hidden rounded border border-neutral-700"
    >
      <Carousel.ItemGroup>
        {#each Array.from({length: 5}) as _, index}
          <Carousel.Item
            {index}
            class="flex h-[14rem] items-center justify-center bg-neutral-700/25 font-mono text-4xl font-bold lg:h-[16rem]"
          >
            {index + 1}
          </Carousel.Item>
        {/each}
      </Carousel.ItemGroup>
    </Carousel.Viewport>

    <div class="mx-auto mt-5 flex w-fit items-center gap-2">
      <Carousel.PrevTrigger
        class="disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronLeftIcon class="size-5" />
      </Carousel.PrevTrigger>

      <Carousel.IndicatorGroup class="flex items-center justify-center gap-2">
        {#each Array.from({length: 5}) as _, index}
          <Carousel.Indicator
            {index}
            class="size-3 rounded-full bg-neutral-800 transition-colors duration-200 data-current:bg-indigo-500"
          />
        {/each}
      </Carousel.IndicatorGroup>

      <Carousel.NextTrigger
        class="disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronRightIcon class="size-5" />
      </Carousel.NextTrigger>
    </div>
  </Carousel.Root>
</Container>
