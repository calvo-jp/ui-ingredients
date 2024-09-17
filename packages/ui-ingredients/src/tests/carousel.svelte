<script lang="ts">
  import {Carousel} from '$lib/index.js';

  interface Props {
    images: string[];
  }

  let {images}: Props = $props();
</script>

<Carousel.Root>
  <Carousel.Viewport>
    <Carousel.ItemGroup>
      {#each images as src, index}
        <Carousel.Item {index}>
          <img {src} alt="" />
        </Carousel.Item>
      {/each}
    </Carousel.ItemGroup>
  </Carousel.Viewport>

  <Carousel.IndicatorGroup>
    {#each images as _, index}
      <Carousel.Indicator {index} />
    {/each}
  </Carousel.IndicatorGroup>

  <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
  <Carousel.NextTrigger>Next</Carousel.NextTrigger>
</Carousel.Root>
