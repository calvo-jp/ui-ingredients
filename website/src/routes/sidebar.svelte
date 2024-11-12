<script lang="ts">
  import {page} from '$app/stores';
  import {COMPONENTS, UTILITIES} from '$lib/const';
  import {dataAttr} from '$lib/data-attr';
  import {ChevronRightIcon} from '@untitled-theme/icons-svelte';
  import {Collapsible} from 'ui-ingredients';

  const links = $derived([
    {
      name: 'Overview',
      children: [
        {
          name: 'Introduction',
          href: '/',
        },
        {
          name: 'Getting Started',
          href: '/getting-started',
        },
        {
          name: 'Styling',
          href: '/styling',
        },
        {
          name: 'asChild',
          href: '/aschild',
        },
      ],
    },
    {
      name: 'Components',
      children: COMPONENTS.map((item) => ({
        name: item.name,
        href: '/components/' + item.slug,
      })),
    },
    {
      name: 'Utilities',
      children: UTILITIES.map((item) => ({
        name: item.name,
        href: '/utilities/' + item.slug,
      })),
    },
  ]);
</script>

<div class="w-[18rem] shrink-0"></div>

<nav
  class="fixed left-0 top-16 z-sticky h-[calc(theme(height.dvh)-theme(spacing.16))] w-[18rem] shrink-0 overflow-y-auto border-r border-neutral-800 bg-neutral-900 px-12 py-8"
>
  <ul class="space-y-4">
    {#each links as link}
      <li>
        <Collapsible.Root open>
          <Collapsible.Trigger
            class="group flex w-full gap-2 py-1 text-left text-sm font-semibold"
          >
            <span class="grow">{link.name}</span>
            <ChevronRightIcon
              class="size-4 text-neutral-400 transition-transform duration-150 group-data-open:rotate-90"
            />
          </Collapsible.Trigger>
          <Collapsible.Content>
            {#snippet asChild(action, attrs)}
              <ul
                class="space-y-0.5 overflow-hidden data-open:animate-collapse-in data-closed:animate-collapse-out"
                use:action
                {...attrs}
              >
                {#each link.children as child}
                  <li>
                    <a
                      href={child.href}
                      class="block rounded py-1 text-sm font-semibold text-neutral-400 transition-colors duration-150 hover:text-inherit data-current:text-indigo-400"
                      data-current={dataAttr($page.url.pathname === child.href)}
                    >
                      {child.name}
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
</nav>
