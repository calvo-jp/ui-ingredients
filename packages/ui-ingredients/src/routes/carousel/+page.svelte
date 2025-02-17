<script lang="ts">
  import {Carousel} from '$lib/index.js';

  let items = [
    'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
</script>

<Carousel.Root autoplay loop>
  <Carousel.ItemGroup>
    {#each items as src, index}
      <Carousel.Item {index}>
        <img {src} alt="" />
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>
  <Carousel.Control>
    <Carousel.PrevTrigger>&lt;</Carousel.PrevTrigger>
    <Carousel.IndicatorGroup>
      {#each items as _, index}
        <Carousel.Indicator {index} />
      {/each}
    </Carousel.IndicatorGroup>
    <Carousel.NextTrigger>&gt;</Carousel.NextTrigger>
  </Carousel.Control>
</Carousel.Root>
