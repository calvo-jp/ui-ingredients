<script lang="ts">
  import CarouselIndicatorGroup from './carousel-indicator-group.svelte';
  import CarouselIndicator from './carousel-indicator.svelte';
  import CarouselItemGroup from './carousel-item-group.svelte';
  import CarouselItem from './carousel-item.svelte';
  import CarouselNextTrigger from './carousel-next-trigger.svelte';
  import CarouselPrevTrigger from './carousel-prev-trigger.svelte';
  import CarouselRoot from './carousel-root.svelte';
  import CarouselViewport from './carousel-viewport.svelte';

  interface Props {
    images: string[];
  }

  let {images}: Props = $props();
</script>

<CarouselRoot>
  <CarouselViewport>
    <CarouselItemGroup>
      {#each images as src, index}
        <CarouselItem {index}>
          <img {src} alt="" />
        </CarouselItem>
      {/each}
    </CarouselItemGroup>
  </CarouselViewport>

  <CarouselIndicatorGroup>
    {#each images as _, index}
      <CarouselIndicator {index} />
    {/each}
  </CarouselIndicatorGroup>

  <CarouselPrevTrigger>Previous</CarouselPrevTrigger>
  <CarouselNextTrigger>Next</CarouselNextTrigger>
</CarouselRoot>
