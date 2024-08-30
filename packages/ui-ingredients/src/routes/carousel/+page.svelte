<script lang="ts">
  import {Carousel} from '$lib/index.js';
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@untitled-theme/icons-svelte';

  let items = [
    'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  let index = $state(0);

  $inspect({index});
</script>

<Carousel.Root
  {index}
  onIndexChange={(detail) => {
    index = detail.index;
  }}
  class="w-full lg:max-w-[32rem]"
>
  <Carousel.Viewport class="overflow-hidden rounded">
    <Carousel.ItemGroup>
      {#each items as src, index}
        <Carousel.Item {index} class="h-[16rem] overflow-hidden lg:h-[20rem]">
          <img
            {src}
            alt=""
            class="max-h-[125%] min-h-full min-w-full max-w-[125%]"
          />
        </Carousel.Item>
      {/each}
    </Carousel.ItemGroup>
  </Carousel.Viewport>

  <div class="mx-auto mt-5 flex w-fit items-center gap-2">
    <Carousel.PrevTrigger
      class="disabled:cursor-not-allowed disabled:opacity-50"
    >
      <ChevronLeftIcon class="size-6" />
    </Carousel.PrevTrigger>

    <Carousel.IndicatorGroup class="flex items-center justify-center gap-2">
      {#each items as _, index}
        <Carousel.Indicator
          {index}
          class="data-current:bg-accent bg-light size-4 rounded-full transition-colors duration-200"
        />
      {/each}
    </Carousel.IndicatorGroup>

    <Carousel.NextTrigger
      class="disabled:cursor-not-allowed disabled:opacity-50"
    >
      <ChevronRightIcon class="size-6" />
    </Carousel.NextTrigger>
  </div>
</Carousel.Root>
