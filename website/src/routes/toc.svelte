<script lang="ts">
  import {page} from '$app/state';
  import {tick} from 'svelte';
  import {SegmentGroup} from 'ui-ingredients';

  interface Item {
    value: string;
    label: string;
    indent: number;
    ref: HTMLHeadingElement;
  }

  let items: Item[] = $state([]);
  let value: string | undefined = $state();

  async function getItems() {
    await tick();

    const main = document.querySelector('[data-toc-root]');

    if (!main) return;

    const selectors = [
      'h1:not([data-scope][data-part])',
      'h2:not([data-scope][data-part])',
    ];

    const headings = main.querySelectorAll<HTMLHeadingElement>(
      selectors.join(),
    );

    const newItems: Item[] = [];

    headings.forEach((ref, index) => {
      const label = ref.innerText;
      const value = index.toString();

      newItems.push({
        ref,
        value,
        label,
        indent: ref.tagName === 'H3' ? 12 : 0,
      });
    });

    items = newItems;
    value = items.length > 0 ? newItems[0].value : undefined;
  }

  $effect.pre(() => {
    page.url.pathname;
    getItems();
  });

  $effect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach(({ref: target, ...item}) => {
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

<div
  class="hidden w-[18rem] shrink-0 xl:block"
  aria-hidden="true"
  data-placeholder
></div>

<aside
  class="fixed right-[var(--scrollbar-width,0)] top-16 z-sticky mt-20 hidden w-[18rem] shrink-0 border-l border-neutral-200 bg-white py-2 dark:border-neutral-800 dark:bg-neutral-950 xl:block"
>
  <h2 class="mb-2 px-5 font-lexend font-semibold">On this page</h2>

  <SegmentGroup.Root
    {value}
    onValueChange={(detail) => {
      value = detail.value;

      const item = items.find((item) => item.value === detail.value);

      if (!item) return;

      const top = item.ref.getBoundingClientRect().top + window.scrollY + -100;

      window.scrollTo({top});
    }}
    orientation="vertical"
    class="relative w-fit"
  >
    {#each items as item}
      <SegmentGroup.Item
        value={item.value}
        class="relative block cursor-pointer py-0.5 pl-[var(--indent)] text-neutral-500 transition-colors duration-150 hover:text-neutral-600 ui-checked:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:ui-checked:text-neutral-200"
        style="--indent:{item.indent}px"
      >
        <SegmentGroup.ItemText class="px-5">{item.label}</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    {/each}

    <SegmentGroup.Indicator
      class="-left-px h-5 w-0.5 bg-indigo-600 dark:bg-indigo-500"
    />
  </SegmentGroup.Root>
</aside>
