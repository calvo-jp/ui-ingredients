<script lang="ts">
  import {twMerge} from 'tailwind-merge';
  import {RatingGroup} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <RatingGroup.Root class="mx-auto w-fit">
    {#snippet children(context)}
      <RatingGroup.Control class="flex">
        {#each context.items as index}
          <RatingGroup.Item {index}>
            {#snippet children(state)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class={twMerge(
                  'size-8',
                  'transition-colors',
                  'duration-150',
                  state.highlighted
                    ? 'text-indigo-600 dark:text-indigo-500'
                    : 'text-neutral-300 dark:text-neutral-700',
                )}
              >
                <path
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            {/snippet}
          </RatingGroup.Item>
        {/each}
      </RatingGroup.Control>
    {/snippet}
  </RatingGroup.Root>
</Container>
