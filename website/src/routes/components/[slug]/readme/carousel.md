---
name: Carousel
description: A rotating component for cycling through images or content slides.
---

```svelte
<script lang="ts">
  import {Carousel} from 'ui-ingredients';
  import {ChevronLeftIcon, ChevronRightIcon} from '$lib/icons';

  let items = [
    'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
    'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg',
    'https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg',
  ];

  let index = $state(0);
</script>

<Carousel.Root
  {index}
  onIndexChange={function (detail) {
    index = detail.index;
  }}
>
  <Carousel.Viewport>
    <Carousel.ItemGroup>
      {#each items as src, index}
        <Carousel.Item {index}>
          <img {src} alt="" />
        </Carousel.Item>
      {/each}
    </Carousel.ItemGroup>
  </Carousel.Viewport>

  <div>
    <Carousel.PrevTrigger>
      <ChevronLeftIcon />
    </Carousel.PrevTrigger>

    <Carousel.IndicatorGroup>
      {#each items as _, index}
        <Carousel.Indicator {index} />
      {/each}
    </Carousel.IndicatorGroup>

    <Carousel.NextTrigger>
      <ChevronRightIcon />
    </Carousel.NextTrigger>
  </div>
</Carousel.Root>
```
