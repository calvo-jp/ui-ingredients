<script lang="ts">
  import {Carousel} from '$lib/index.js';

  let items = [
    'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
</script>

<Carousel.Root class="max-w-[32rem]">
  <Carousel.Viewport class="overflow-hidden">
    <Carousel.ItemGroup>
      {#each items as src, index}
        <Carousel.Item {index}>
          <img {src} alt="" />
        </Carousel.Item>
      {/each}
    </Carousel.ItemGroup>
  </Carousel.Viewport>

  <div class="mx-auto mt-5 flex w-fit items-center gap-2">
    <Carousel.PrevTrigger class="disabled:cursor-not-allowed disabled:opacity-50">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-5"
      >
        <path d="M15 18L9 12L15 6"></path>
      </svg>
    </Carousel.PrevTrigger>

    <Carousel.IndicatorGroup class="flex items-center justify-center gap-2">
      {#each items as _, index}
        <Carousel.Indicator
          {index}
          class="data-current:bg-indigo-500 size-3 rounded-full bg-neutral-700 transition-colors duration-200"
        />
      {/each}
    </Carousel.IndicatorGroup>

    <Carousel.NextTrigger class="disabled:cursor-not-allowed disabled:opacity-50">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-5"
      >
        <path d="M9 18L15 12L9 6"></path>
      </svg>
    </Carousel.NextTrigger>
  </div>
</Carousel.Root>
