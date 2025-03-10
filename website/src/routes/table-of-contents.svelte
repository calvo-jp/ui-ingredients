<script lang="ts">
  import {page} from '$app/state';
  import debounce from 'lodash.debounce';
  import {SegmentGroup} from 'ui-ingredients';

  interface Item {
    id: string;
    title: string;
    depth: number;
  }

  let items = $derived.by(() => {
    const res: Item[] = [];

    /* eslint-disable-next-line no-undef */
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

  let activeHeadingId: string | null | undefined = $state();

  function scrollActiveHeadingIntoView(id: string) {
    const heading = document.getElementById(id);
    if (!heading) return;
    const offsetTop = heading.offsetTop;
    document.documentElement.scrollTo({
      top: offsetTop - containerOffset,
      behavior: 'smooth',
    });
  }

  const debouncedSetActiveHeading = debounce((id: string) => {
    activeHeadingId = id;
  }, 250);

  function watchHeadingInView() {
    let headings = items.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            debouncedSetActiveHeading(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
      },
    );

    headings.forEach((heading) => heading && observer.observe(heading));

    return () => observer.disconnect();
  }

  $effect(watchHeadingInView);
</script>

<div
  class="hidden w-[20rem] shrink-0 xl:block"
  aria-hidden="true"
  data-placeholder
></div>

<aside
  class="fixed right-[var(--scrollbar-width,0)] top-16 mt-20 hidden w-[20rem] shrink-0 border-l border-neutral-200 bg-white py-2 xl:block dark:border-neutral-800 dark:bg-neutral-950"
>
  <h2 class="font-lexend mb-2 px-5 font-semibold">On this page</h2>

  <SegmentGroup.Root
    value={activeHeadingId}
    onValueChange={(detail) => {
      if (!detail.value) return;
      activeHeadingId = detail.value;
      scrollActiveHeadingIntoView(detail.value);
    }}
    orientation="vertical"
    class="relative w-fit"
  >
    {#each items as item}
      <SegmentGroup.Item
        value={item.id}
        class="ui-checked:text-neutral-800 dark:ui-checked:text-neutral-200 relative block cursor-pointer py-0.5 pl-[var(--indent)] text-neutral-500 transition-colors duration-150 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
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
