<script lang="ts">
  import {page} from '$app/state';
  import {SegmentGroup} from 'ui-ingredients';

  let items = $derived.by(() => {
    const res: {
      id: string;
      title: string;
      depth: number;
    }[] = [];

    function flat(arr: App.TocEntry[], depth = 0) {
      arr.forEach(({items, title, url}) => {
        res.push({
          id: url.substring(1),
          title,
          depth,
        });

        if (items) flat(items, depth + 1);
      });
    }

    flat(page.data.toc);

    return res;
  });

  let value: string | undefined = $state();
  let setValue = (newValue: string) => {
    value = newValue;
  };

  $effect(() => {
    value = items[0].id;
  });

  $effect(() => {
    const elems = items
      .map(({id}) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setValue(entry.target.id);
          }
        });
      },
      {
        threshold: 0.75,
      },
    );

    elems.forEach((elem) => {
      if (!elem) return;
      observer.observe(elem);
    });

    return () => observer.disconnect();
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
    {value}
    onValueChange={(detail) => {
      setValue(detail.value);
      const elem = document.getElementById(detail.value);
      if (!elem) return;
      elem.scrollIntoView({behavior: 'smooth'});
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
