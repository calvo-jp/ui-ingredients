---
id: carousel
title: Carousel
description: A rotating component for cycling through images or content slides.
---

## Anatomy

## Usage

```svelte
<script>
  import {Carousel} from 'ui-ingredients';
  import {ChevronLeftIcon, ChevronRightIcon} from '$lib/icons';

  let items = [
    'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
    'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg',
    'https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg',
  ];
</script>

<Carousel.Root>
  <Carousel.ItemGroup>
    {#each items as src, index}
      <Carousel.Item {index}>
        <img {src} alt="" />
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>

  <Carousel.IndicatorGroup>
    {#each items, index}
      <Carousel.Indicator {index} />
    {/each}
  </Carousel.IndicatorGroup>

  <Carousel.Control>
    <Carousel.PrevTrigger>
      <ChevronLeftIcon />
    </Carousel.PrevTrigger>
    <Carousel.NextTrigger>
      <ChevronRightIcon />
    </Carousel.NextTrigger>
  </Carousel.Control>
</Carousel.Root>
```

## API Reference

## Accessibility

### Keyboard Support
