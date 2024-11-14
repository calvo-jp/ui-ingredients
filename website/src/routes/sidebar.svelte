<script lang="ts">
  import {page} from '$app/stores';
  import {APP_LINKS} from '$lib/const';
  import {dataAttr} from '$lib/data-attr';
  import {ChevronRightIcon} from '@untitled-theme/icons-svelte';
  import {Collapsible} from 'ui-ingredients';
</script>

<div class="w-[18rem] shrink-0"></div>

<nav
  class="fixed left-0 top-16 z-sticky h-[calc(theme(height.dvh)-theme(spacing.16))] w-[18rem] shrink-0 overflow-y-auto scroll-smooth border-r border-neutral-800 bg-neutral-950 px-12 py-8 scrollbar scrollbar-track-neutral-900 scrollbar-thumb-neutral-600"
>
  <ul class="space-y-4">
    {#each APP_LINKS as parent}
      <li>
        <Collapsible.Root open>
          <Collapsible.Trigger
            class="group flex w-full gap-2 py-1 text-left text-sm font-semibold"
          >
            <span class="grow">{parent.name}</span>
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
                {#each parent.links as child}
                  <li>
                    <a
                      href={child.href}
                      class="block rounded py-1 text-sm font-semibold text-neutral-400 transition-colors duration-150 data-current:text-indigo-400 hover:text-inherit"
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
