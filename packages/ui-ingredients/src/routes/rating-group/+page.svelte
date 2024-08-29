<script lang="ts">
  import {RatingGroup} from '$lib/index.js';
  import {Label} from '../shared/index.js';

  let value = $state(0);

  $inspect(value);
</script>

<RatingGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  {#snippet children(context)}
    <RatingGroup.Label>
      {#snippet asChild(mergedProps)}
        <Label {...mergedProps}>Score</Label>
      {/snippet}
    </RatingGroup.Label>

    <div class="flex">
      {#each context.items as index}
        <RatingGroup.Item {index} class="text-amber-500">
          {#snippet children(state)}
            {#if state.half}
              <svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
                ></path>
              </svg>
            {:else if state.highlighted}
              <svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                ></path>
              </svg>
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
                ></path>
              </svg>
            {/if}
          {/snippet}
        </RatingGroup.Item>
      {/each}
    </div>
  {/snippet}
</RatingGroup.Root>
