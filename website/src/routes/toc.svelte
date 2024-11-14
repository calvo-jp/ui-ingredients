<script lang="ts">
  import {page} from '$app/stores';
  import {tick} from 'svelte';
  import {SegmentGroup} from 'ui-ingredients';

  interface Item {
    value: string;
    label: string;
    target: HTMLHeadingElement;
  }

  let items: Item[] = $state([]);
  let value: string | undefined = $state();

  async function getItems() {
    await tick();

    const main = document.getElementById('content');

    if (!main) return;

    const headings = main.querySelectorAll<HTMLHeadingElement>('h2');
    const newItems: Item[] = [];

    headings.forEach((target, index) => {
      const label = target.innerText;
      const value = index.toString();

      newItems.push({
        target,
        value,
        label,
      });
    });

    items = newItems;
    value = items.length > 0 ? newItems[0].value : undefined;
  }

  $effect.pre(() => {
    $page.url.pathname;

    getItems();
  });

  $effect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach(({target, ...item}) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              value = item.value;
            }
          });
        },
        {
          threshold: 1,
        },
      );

      observer.observe(target);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  });
</script>

<div class="w-[18rem] shrink-0"></div>

<section
  class="fixed right-0 top-16 z-sticky mt-20 w-[18rem] shrink-0 border-l border-neutral-800 bg-neutral-950 py-2"
>
  <h2 class="mb-2 px-5 font-semibold">On this page</h2>

  <SegmentGroup.Root
    {value}
    onValueChange={(detail) => {
      value = detail.value;

      const item = items.find((item) => item.value === detail.value);

      item?.target.scrollIntoView({
        block: 'start',
        inline: 'start',
        behavior: 'smooth',
      });
    }}
    orientation="vertical"
    class="relative w-fit"
  >
    {#each items as item}
      <SegmentGroup.Item
        value={item.value}
        class="relative block cursor-pointer py-0.5 text-neutral-400 transition-colors duration-200 hover:text-neutral-300 data-checked:text-neutral-200"
      >
        <SegmentGroup.ItemText class="px-5">{item.label}</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    {/each}

    <SegmentGroup.Indicator class="-left-px h-5 w-0.5 bg-indigo-500" />
  </SegmentGroup.Root>
</section>
