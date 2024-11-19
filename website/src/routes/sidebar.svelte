<script>
  import {page} from '$app/stores';
  import {APP_LINKS} from '$lib/const';
  import {dataAttr} from '$lib/data-attr';
  import {navbarStore} from '$lib/stores';
  import {ChevronRightIcon} from '@untitled-theme/icons-svelte';
  import {Collapsible, Drawer, Portal} from 'ui-ingredients';
</script>

<div
  class="hidden w-[18rem] shrink-0 lg:block"
  aria-hidden="true"
  data-placeholder
></div>

<nav
  class="fixed left-0 top-16 z-sticky hidden h-[calc(theme(height.dvh)-theme(spacing.16))] w-[18rem] shrink-0 overflow-y-auto scroll-smooth border-r border-neutral-200 bg-white px-12 py-8 scrollbar scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 dark:scrollbar-track-neutral-900 dark:scrollbar-thumb-neutral-600 lg:block"
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
      class="fixed inset-0 z-overlay bg-black/25 backdrop-blur-sm data-open:animate-fade-in data-closed:animate-fade-out dark:bg-black/75"
    />

    <Drawer.Positioner>
      <Drawer.Content
        class="border-nuetral-200 fixed left-0 top-0 z-modal flex h-dvh w-[18rem] flex-col overflow-y-auto border-r bg-white p-8 scrollbar data-open:animate-slide-in-left data-closed:animate-slide-out-left dark:border-neutral-800 dark:bg-neutral-900"
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
  <ul class="space-y-4">
    {#each APP_LINKS as parent}
      <li>
        <Collapsible.Root open>
          <Collapsible.Trigger
            class="group flex w-full gap-2 py-1 text-left text-sm font-semibold"
          >
            <span class="grow">{parent.label}</span>
            <ChevronRightIcon
              class="size-4 text-neutral-500 transition-transform duration-150 group-data-open:rotate-90 dark:text-neutral-400"
            />
          </Collapsible.Trigger>
          <Collapsible.Content>
            {#snippet asChild(action, attrs)}
              <ul
                class="space-y-0.5 overflow-hidden data-open:animate-collapse-in data-closed:animate-collapse-out"
                use:action
                {...attrs}
              >
                {#each parent.links as child}
                  <li>
                    <a
                      href={child.path}
                      class="group flex items-center gap-3 rounded py-1"
                      data-current={dataAttr($page.url.pathname === child.path)}
                    >
                      <span
                        class="text-sm font-semibold text-neutral-500 transition-colors duration-150 group-hover:text-inherit group-data-current:text-indigo-500 dark:text-neutral-400 dark:group-data-current:text-indigo-400"
                      >
                        {child.label}
                      </span>

                      {#if child.betaBadge}
                        <span
                          class="rounded-full border border-neutral-200 bg-neutral-50 px-1.5 py-px text-xs font-semibold dark:border-neutral-800 dark:bg-neutral-800/50"
                        >
                          Beta
                        </span>
                      {/if}
                    </a>
                  </li>
                {/each}
              </ul>
            {/snippet}
          </Collapsible.Content>
        </Collapsible.Root>
      </li>
    {/each}
  </ul>
{/snippet}
