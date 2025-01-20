<script>
  import {page} from '$app/state';
  import Badge from '$lib/components/ui/badge.svelte';
  import {navbarStore} from '$lib/stores/navbar.svelte';
  import {components, overview, utilities} from '.velite';
  import {Drawer, Portal} from 'ui-ingredients';

  const links = [
    {
      label: 'Overview',
      links: overview.map((item) => ({
        path: item.id === 'introduction' ? '/' : item.id,
        label: item.title,
        beta: false,
      })),
    },
    {
      label: 'Components',
      links: components.map((item) => ({
        path: `/components/${item.id}`,
        label: item.title,
        beta: item.beta,
      })),
    },
    {
      label: 'Utilities',
      links: utilities.map((item) => ({
        path: `/utilities/${item.id}`,
        label: item.title,
        beta: item.beta,
      })),
    },
  ];
</script>

<div
  class="hidden w-[18rem] shrink-0 lg:block"
  aria-hidden="true"
  data-placeholder
></div>

<nav
  class="fixed left-0 top-16 z-sticky hidden h-[calc(theme(height.dvh)-theme(spacing.16))] w-[18rem] shrink-0 overflow-y-auto scroll-smooth border-r border-neutral-200 bg-white px-12 py-8 dark:border-neutral-800 dark:bg-neutral-950 lg:block"
>
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
      class="fixed left-0 top-0 z-overlay size-full bg-white/95 ui-open:animate-fade-in ui-closed:animate-fade-out dark:bg-black/95"
    />

    <Drawer.Positioner>
      <Drawer.Content
        class="fixed left-0 top-0 z-modal flex h-dvh w-[18rem] flex-col overflow-y-auto border-r border-neutral-200 bg-white px-5 py-6 ui-open:animate-slide-in-left ui-closed:animate-slide-out-left dark:border-neutral-700 dark:bg-neutral-900"
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
          class="block grow py-1 text-left font-lexend font-semibold lg:text-sm"
        >
          {parent.label}
        </span>

        <ul
          class="space-y-0.5 overflow-hidden ui-open:animate-collapse-in ui-closed:animate-collapse-out"
        >
          {#each parent.links as child}
            <li>
              <a
                href={child.path}
                class="group flex items-center gap-3 rounded py-1"
                onclick={() => {
                  navbarStore.drawer.close();
                }}
                data-current={page.url.pathname === child.path ? '' : undefined}
              >
                <span
                  class="font-medium text-neutral-500 transition-colors duration-150 group-hover:text-inherit ui-group-current:text-indigo-500 dark:text-neutral-400 dark:ui-group-current:text-indigo-400 lg:text-sm"
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
