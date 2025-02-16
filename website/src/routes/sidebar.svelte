<script>
  import {page} from '$app/state';
  import Badge from '$lib/components/ui/badge.svelte';
  import {navbarStore} from '$lib/stores/navbar.svelte';
  import {components, overview, utilities} from '.velite';
  import {Drawer, Portal} from 'ui-ingredients';
  import Search from './search.svelte';

  const links = [
    {
      label: 'Overview',
      links: overview.map((item) => ({
        path: item.permalink,
        label: item.title,
        beta: false,
      })),
    },
    {
      label: 'Components',
      links: components.map((item) => ({
        path: item.permalink,
        label: item.title,
        beta: item.beta,
      })),
    },
    {
      label: 'Utilities',
      links: utilities.map((item) => ({
        path: item.permalink,
        label: item.title,
        beta: item.beta,
      })),
    },
  ];
</script>

<div
  class="hidden w-[20rem] shrink-0 lg:block"
  aria-hidden="true"
  data-placeholder
></div>

<nav
  class="fixed left-0 top-16 hidden h-[calc(100dvh---spacing(16))] w-[20rem] shrink-0 space-y-4 overflow-y-auto scroll-smooth border-r border-neutral-200 bg-white px-12 py-8 lg:block dark:border-neutral-800 dark:bg-neutral-950"
>
  <Search />

  {@render items()}
</nav>

<Drawer.Root
  open={navbarStore.drawer.isOpen}
  openControlled
  onOpenChange={(detail) => {
    if (detail.open) {
      navbarStore.drawer.open();
    } else {
      navbarStore.drawer.close();
    }
  }}
>
  <Portal>
    <Drawer.Backdrop
      class="ui-open:animate-fade-in ui-closed:animate-fade-out fixed left-0 top-0 size-full bg-white/95 dark:bg-black/95"
    />

    <Drawer.Positioner>
      <Drawer.Content
        class="ui-open:animate-slide-in-left ui-closed:animate-slide-out-left fixed left-0 top-0 flex h-dvh w-[18rem] flex-col overflow-y-auto border-r border-neutral-200 bg-white px-5 py-6 dark:border-neutral-700 dark:bg-neutral-900"
      >
        <Drawer.Body>
          <nav>
            {@render items()}
          </nav>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>

{#snippet items()}
  <ul>
    {#each links as parent}
      <li
        class="border-t border-neutral-200 py-4 first:border-0 first:pt-0 dark:border-neutral-800"
      >
        <span
          class="font-lexend block grow py-1 text-left font-semibold lg:text-sm"
        >
          {parent.label}
        </span>

        <ul class="space-y-0.5 overflow-hidden">
          {#each parent.links as child}
            <li>
              <a
                href={child.path}
                class="flex items-center gap-3 rounded py-1"
                onclick={() => {
                  navbarStore.drawer.close();
                }}
              >
                <span
                  class={[
                    'font-medium transition-colors duration-150 lg:text-sm',
                    page.url.pathname === child.path
                      ? 'text-indigo-500 dark:text-indigo-400'
                      : 'text-neutral-500 hover:text-inherit dark:text-neutral-400',
                  ]}
                >
                  {child.label}
                </span>

                {#if child.beta}
                  <Badge>Beta</Badge>
                {/if}
              </a>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
{/snippet}
