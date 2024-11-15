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
                      class="group flex items-center gap-3 rounded py-1"
                      data-current={dataAttr($page.url.pathname === child.href)}
                    >
                      <span
                        class="text-sm font-semibold text-neutral-400 transition-colors duration-150 group-hover:text-inherit group-data-current:text-indigo-400"
                      >
                        {child.name}
                      </span>

                      {#if child.beta}
                        <span
                          class="rounded-full border border-neutral-800 bg-neutral-800/50 px-1.5 py-px text-xs font-semibold"
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
</nav>
