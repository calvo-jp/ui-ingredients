<script lang="ts">
  import {Carousel} from '$lib/index.js';

  interface Props {
    images: string[];
  }

  let {images}: Props = $props();
</script>

<Carousel.Root slideCount={images.length}>
  <Carousel.ItemGroup>
    {#each images as src, index}
      <Carousel.Item {index}>
        <img {src} alt="" />
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>

  <Carousel.IndicatorGroup>
    {#each images as _, index}
      <Carousel.Indicator {index}>{index}</Carousel.Indicator>
    {/each}
  </Carousel.IndicatorGroup>

  <Carousel.Control>
    <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
    <Carousel.NextTrigger>Next</Carousel.NextTrigger>
  </Carousel.Control>
</Carousel.Root>
