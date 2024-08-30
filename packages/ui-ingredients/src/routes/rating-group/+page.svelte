<script lang="ts">
  import {RatingGroup} from '$lib/index.js';
  import {cx, Label} from '../shared/index.js';

  let value = $state(1.5);

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
      {#snippet asChild(attrs)}
        <Label {...attrs}>Score</Label>
      {/snippet}
    </RatingGroup.Label>

    <div class="flex">
      {#each context.items as index}
        <RatingGroup.Item {index}>
          {#snippet children(state)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class={cx(
                'size-8 text-neutral-700 transition-colors duration-200',
                state.highlighted && 'text-accent',
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
    </div>
  {/snippet}
</RatingGroup.Root>
