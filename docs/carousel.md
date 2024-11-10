# Carousel

A rotating component for cycling through images or content slides.

## Usage

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

## Props

### Root

- `ids`

  The ids of the elements

- `loop`

  Whether the carousel should loop around.

- `align`

  The alignment of the slides in the carousel.

- `index`

  The current slide index.

- `spacing`

  The amount of space between slides.

- `orientation`

  The orientation of the carousel.

- `slidesPerView`

  The number of slides to show at a time.

- `onIndexChange`

  Function called when the slide changes.

### Item

- `index`

  The index of the item.

### Indicator

- `index`

  The index of the indicator.
