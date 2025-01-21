<script lang="ts">
  import {page} from '$app/state';
  import {SegmentGroup} from 'ui-ingredients';

  interface Item {
    id: string;
    title: string;
    depth: number;
  }

  let items = $derived.by(() => {
    const res: Item[] = [];

    function flat(arr: App.TocEntry[], depth = 0) {
      arr.forEach(({items, url, title}) => {
        const id = url.substring(1);

        res.push({
          id,
          title,
          depth,
        });

        if (items.length) {
          flat(items, depth + 1);
        }
      });
    }

    if (page.data.toc.length) {
      flat(page.data.toc);
    }

    return res;
  });

  let rootFontSize = $state(16);
  let navbarHeight = $derived(4 /* rem */ * rootFontSize);
  let containerPadding = $derived(2 /* rem */ * rootFontSize);
  let containerOffset = $derived(navbarHeight + containerPadding);

  $effect.pre(function getCorrectRootFontSize() {
    const rootCss = getComputedStyle(document.documentElement);
    rootFontSize = parseFloat(rootCss.fontSize);
  });

  let activeHeadingId: string | undefined = $state();

  function scrollActiveHeadingIntoView(id: string) {
    const heading = document.getElementById(id);
    if (!heading) return;
    const offsetTop = heading.offsetTop;
    document.documentElement.scrollTo({
      top: offsetTop - containerOffset,
      behavior: 'smooth',
    });
  }

  function setActiveHeadingId(id: string) {
    activeHeadingId = id;
    scrollActiveHeadingIntoView(id);
  }

  function watchHeadingInView() {
    let headings = document.querySelectorAll<HTMLHeadingElement>(
      items.map((item) => `#${item.id}`).join(', '),
    );

    /* TODO: update active heading on scroll */
  }

  $effect(watchHeadingInView);
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
    value={activeHeadingId}
    onValueChange={(detail) => {
      setActiveHeadingId(detail.value);
    }}
    orientation="vertical"
    class="relative w-fit"
  >
    {#each items as item}
      <SegmentGroup.Item
        value={item.id}
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
