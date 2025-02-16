<script lang="ts">
  import {goto} from '$app/navigation';
  import {components, overview, utilities} from '.velite';
  import {CommandIcon, SearchLgIcon} from '@untitled-theme/icons-svelte';
  import {Combobox, Dialog, Portal} from 'ui-ingredients';

  let searchables = [
    /**/
    ...overview,
    ...components,
    ...utilities,
  ];

  let open = $state(false);
  let keyword = $state('');
  let maxResults = 10;

  let recentSearchIds: string[] = $state([]);
  let recentSearch = $derived.by(() => {
    return searchables
      .filter((o) => recentSearchIds.includes(o.id))
      .slice(0, maxResults);
  });

  let saveSearch = (id: string) => {
    const l = [id, ...recentSearchIds].filter((v, i, a) => a.indexOf(v) === i);
    recentSearchIds = l;
    localStorage.setItem('recent-searches', JSON.stringify(l));
  };

  $effect(() => {
    const s = localStorage.getItem('recent-searches');

    if (s) {
      try {
        const l = JSON.parse(s);
        if (Array.isArray(l)) recentSearchIds = l;
      } catch {
        console.warn('Failed to parse recent searches');
      }
    }
  });

  let searchMatches = $derived.by(() => {
    const s = keyword.toLowerCase().trim();

    return searchables
      .filter((o) => {
        return (
          o.title.toLowerCase().includes(s) ||
          o.description.toLowerCase().includes(s) ||
          o.keywords.some((w) => w.toLowerCase().includes(s))
        );
      })
      .slice(0, maxResults);
  });

  let collection = $derived(
    Combobox.collection({
      items: keyword.length ? searchMatches : recentSearch,
      itemToString: (item) => item.title,
      itemToValue: (item) => item.id,
    }),
  );

  $effect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        open = true;
      }
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  });
</script>

<Dialog.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
>
  <Dialog.Trigger
    class="flex h-10 w-full items-center gap-1 rounded border border-neutral-200 px-3 text-left text-sm text-neutral-400 dark:border-neutral-800"
  >
    <SearchLgIcon class="size-4" />
    <span class="grow font-normal">Search...</span>
    <span
      class="grid size-5 place-items-center rounded border border-neutral-200 dark:border-neutral-800"
    >
      <CommandIcon class="size-3" />
    </span>
    <span
      class="grid size-5 place-items-center rounded border border-neutral-200 font-mono text-xs dark:border-neutral-800"
    >
      K
    </span>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop
      class="z-overlay ui-open:animate-fade-in ui-closed:animate-fade-out fixed left-0 top-0 size-full bg-white/50 dark:bg-black/50"
    />
    <Dialog.Positioner>
      <Dialog.Content
        class="z-modal fixed left-1/2 top-32 w-[34rem] -translate-x-1/2 overflow-hidden rounded-md border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900"
      >
        <Combobox.Root
          {collection}
          inputValue={keyword}
          onInputValueChange={(detail) => {
            keyword = detail.inputValue;
          }}
          onValueChange={({value}) => {
            const id = value.at(0);
            if (!id) return;
            const item = searchables.find((o) => o.id === id);
            if (!item) return;
            goto(item.permalink).then(() => {
              open = false;
              keyword = '';
              saveSearch(id);
            });
          }}
          open
          loopFocus
        >
          <Combobox.Control class="relative">
            <Combobox.Input
              class="w-full px-5 py-4 pr-16 outline-none placeholder:text-neutral-500"
              placeholder="Search"
            />

            <span
              class="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 place-items-center rounded border border-neutral-200 px-1 py-0.5 font-mono text-xs dark:border-neutral-800"
            >
              ESC
            </span>
          </Combobox.Control>

          <Combobox.Content
            class="max-h-[18.25rem] space-y-0.5 overflow-y-auto border-t border-neutral-200 dark:border-neutral-700"
          >
            <Combobox.ItemGroup class="space-y-0.5 p-2 py-3">
              {#each collection.items as item}
                <Combobox.Item
                  {item}
                  class="ui-highlighted:bg-neutral-50 dark:ui-highlighted:bg-neutral-800/25 cursor-default rounded-md px-3 py-1"
                >
                  <h2>{item.title}</h2>
                  <p class="line-clamp-1 text-sm text-neutral-500">
                    {item.description}
                  </p>
                </Combobox.Item>
              {/each}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Root>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
