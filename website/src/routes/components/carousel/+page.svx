---
title: Carousel
description: A rotating component for cycling through images or content slides.
---

<script>
  import {CarouselDemo} from '$lib/demo';
  import {Anatomy} from '$lib/anatomy';
  import {Api} from '$lib/api';
  import Metadata from '$lib/metadata.svelte';
  import PageHeading from '$lib/page-heading.svelte';
</script>

<svelte:head>

  <title>UI Ingredients | {title}</title>
</svelte:head>

<Metadata title="{title}" description="{description}" />
<PageHeading title="{title}" description="{description}" />

<CarouselDemo />

## Anatomy

<Anatomy id="carousel" />

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

<Api id="carousel" />
