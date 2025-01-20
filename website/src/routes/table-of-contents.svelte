<script lang="ts">
  import {page} from '$app/state';
  import {SegmentGroup} from 'ui-ingredients';

  let rootFontSize = $state(16);
  let navbarHeight = $derived(4 /* rem */ * rootFontSize);
  let paddingTop = $derived(2 /* rem */ * rootFontSize);
  let topAllowance = $derived(navbarHeight + paddingTop);

  $effect(() => {
    rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
  });

  interface Item {
    url: string;
    title: string;
    depth: number;
  }

  let items = $derived.by(() => {
    const res: Item[] = [];

    function flat(arr: App.TocEntry[], depth = 0) {
      arr.forEach(({items, ...obj}) => {
        res.push({
          ...obj,
          depth,
        });

        if (items.length) flat(items, depth + 1);
      });
    }

    if (page.data.toc.length) flat(page.data.toc);

    return res;
  });

  let activeUrl: string | undefined = $state();
  let activeItem = $derived(items.find((item) => item.url === activeUrl));
  let activeHeading = $derived.by(() => {
    if (!activeItem) return;
    const heading = document.querySelector<HTMLHeadingElement>(activeItem.url);
    return heading;
  });

  $effect(() => {
    if (!activeHeading) return;
    const offsetTop = activeHeading.offsetTop;
    document.documentElement.scrollTo({
      top: offsetTop - topAllowance,
      behavior: 'smooth',
    });
  });
</script>

<div
  class="hidden w-[20rem] shrink-0 xl:block"
  aria-hidden="true"
  data-placeholder
></div>

<aside
  class="fixed right-[var(--scrollbar-width,0)] top-16 z-sticky mt-20 hidden w-[20rem] shrink-0 border-l border-neutral-200 bg-white py-2 dark:border-neutral-800 dark:bg-neutral-950 xl:block"
>
  <h2 class="mb-2 px-5 font-lexend font-semibold">On this page</h2>

  <SegmentGroup.Root
    value={activeUrl}
    onValueChange={(detail) => {
      activeUrl = detail.value;
    }}
    orientation="vertical"
    class="relative w-fit"
  >
    {#each items as item}
      <SegmentGroup.Item
        value={item.url}
        class="relative block cursor-pointer py-0.5 pl-[var(--indent)] text-neutral-500 transition-colors duration-150 hover:text-neutral-600 ui-checked:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:ui-checked:text-neutral-200"
        style="--indent:{item.depth * 12}px"
      >
        <SegmentGroup.ItemText class="px-5">{item.title}</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    {/each}

    <SegmentGroup.Indicator
      class="-left-px h-5 w-0.5 bg-indigo-600 dark:bg-indigo-500"
    />
  </SegmentGroup.Root>
</aside>
