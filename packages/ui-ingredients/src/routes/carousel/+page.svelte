<script lang="ts">
  import {Carousel} from '$lib/index.js';
  import ChevronLeftIcon from '../chevron-left-icon.svelte';
  import ChevronRightIcon from '../chevron-right-icon.svelte';

  let items = [
    'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  let page = $state(0);

  $inspect({page});
</script>

<Carousel.Root
  {page}
  onPageChange={(detail) => {
    page = detail.page;
  }}
  autoplay
  loop
  slideCount={3}
>
  <Carousel.ItemGroup>
    {#each items as src, index}
      <Carousel.Item {index}>
        <img {src} alt="" style="width:100%;height:100%;object-fit:cover;" />
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>

  <Carousel.Control>
    <Carousel.PrevTrigger>
      <ChevronLeftIcon style="width:20px;height:20px;" />
    </Carousel.PrevTrigger>
    <Carousel.IndicatorGroup>
      {#each items as _, index}
        <Carousel.Indicator {index} />
      {/each}
    </Carousel.IndicatorGroup>
    <Carousel.NextTrigger>
      <ChevronRightIcon style="width:20px;height:20px;" />
    </Carousel.NextTrigger>
  </Carousel.Control>
</Carousel.Root>

<style>
  :global([data-scope='carousel'][data-part='root']) {
    max-width: 475px;
  }

  :global([data-scope='carousel'][data-part='item-group']) {
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16/9;
  }

  :global([data-scope='carousel'][data-part='item']) {
    width: 100%;
    height: 100%;
  }

  :global([data-scope='carousel'][data-part='control']) {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  :global(
    [data-scope='carousel'][data-part='prev-trigger'],
    [data-scope='carousel'][data-part='next-trigger']
  ) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global([data-scope='carousel'][data-part='indicator-group']) {
    display: flex;
    gap: 8px;
  }

  :global([data-scope='carousel'][data-part='indicator']) {
    display: block;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    background: oklch(0.922 0 0);
    transition: background 250ms;
  }

  :global([data-scope='carousel'][data-part='indicator'][data-current]) {
    background: oklch(0.746 0.16 232.661);
  }
</style>
