<script lang="ts">
  import {page} from '$app/state';
  import {Drawer, Portal} from '$lib/index.js';
  import {twMerge} from 'tailwind-merge';
  import {store} from './shared/index.js';
  import {links} from './utils.js';

  let currentLink = $derived(
    links.find((item) => item.path === page.url.pathname),
  );
</script>

<svelte:head>
  <title>{currentLink?.label}</title>
</svelte:head>

<div
  class={twMerge(
    'hidden',
    'lg:block',
    'h-dvh',
    'w-[20rem]',
    'p-12',
    'pt-8',
    'shrink-0',
    'border-r',
    'overflow-y-auto',
  )}
>
  <nav>
    <ul class="space-y-1">
      {#each links as link}
        <li class="block w-full">
          <a
            href={link.path}
            class={twMerge(
              'group',
              'flex',
              'items-center',
              'text-sm',
              'font-semibold',
              'text-neutral-400',
              'transition-colors',
              'duration-150',
              'aria-page:text-indigo-400',
            )}
            aria-current={link.path === currentLink?.path ? 'page' : undefined}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<Drawer.Root
  lazyMount
  keepMounted
  open={store.sidebar.isOpen}
  openControlled
  onOpenChange={(detail) => {
    store.sidebar.isOpen = detail.open;
  }}
>
  <Portal>
    <Drawer.Positioner>
      <Drawer.Content
        class="bg fixed bottom-0 left-0 top-16 z-modal w-64 border-r data-open:animate-slide-in-left data-closed:animate-slide-out-left"
      >
        <Drawer.Body class="h-full overflow-y-auto p-6">
          <nav>
            <ul class="space-y-0.5">
              {#each links as link}
                <li class="block w-full">
                  <a
                    href={link.path}
                    class={twMerge(
                      'group',
                      'flex',
                      'items-center',
                      'text-sm',
                      'font-semibold',
                      'text-neutral-400',
                      'transition-colors',
                      'duration-150',
                      'aria-page:text-accent',
                    )}
                    aria-current={link.path === currentLink?.path
                      ? 'page'
                      : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              {/each}
            </ul>
          </nav>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
