<script lang="ts">
  import {page} from '$app/stores';
  import {tick} from 'svelte';
  import {SegmentGroup} from 'ui-ingredients';

  interface Item {
    value: string;
    label: string;
    target: HTMLHeadingElement;
    indent: number;
  }

  let items: Item[] = $state([]);
  let value: string | undefined = $state();

  async function getItems() {
    await tick();

    const main = document.getElementById('content');

    if (!main) return;

    const selectors = [
      'h2:not([data-scope][data-part])',
      'h3:not([data-scope][data-part])',
    ];

    const headings = main.querySelectorAll<HTMLHeadingElement>(
      selectors.join(),
    );

    const newItems: Item[] = [];

    headings.forEach((target, index) => {
      const label = target.innerText;
      const value = index.toString();

      newItems.push({
        value,
        label,
        target,
        indent: target.tagName === 'H3' ? 16 : 0,
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
  class="fixed right-[var(--scrollbar-width,0)] top-16 z-sticky mt-20 w-[18rem] shrink-0 border-l border-neutral-800 bg-neutral-950 py-2"
>
  <h2 class="mb-2 px-5 font-semibold">On this page</h2>

  <SegmentGroup.Root
    {value}
    onValueChange={(detail) => {
      value = detail.value;

      const item = items.find((item) => item.value === detail.value);

      if (!item) return;

      const top =
        item.target.getBoundingClientRect().top + window.scrollY + -100;

      window.scrollTo({top});
    }}
    orientation="vertical"
    class="relative w-fit"
  >
    {#each items as item}
      <SegmentGroup.Item
        value={item.value}
        class="relative block cursor-pointer py-0.5 pl-[var(--indent)] text-neutral-400 transition-colors duration-200 data-checked:text-neutral-200 hover:text-neutral-300"
        style="--indent:{item.indent}px"
      >
        <SegmentGroup.ItemText class="px-5">{item.label}</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    {/each}

    <SegmentGroup.Indicator class="-left-px h-5 w-0.5 bg-indigo-500" />
  </SegmentGroup.Root>
</section>
