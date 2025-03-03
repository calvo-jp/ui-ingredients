<script lang="ts">
  import {RatingGroup} from '$lib/index.js';
  import StarIcon from '../star-icon.svelte';

  let value = $state(1);

  $inspect({value});
</script>

<RatingGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  {#snippet children(context)}
    <RatingGroup.Label>Score</RatingGroup.Label>
    <RatingGroup.Control>
      {#each context.items as index}
        <RatingGroup.Item {index}>
          <StarIcon style="width:28px;height:28px;" />
        </RatingGroup.Item>
      {/each}
    </RatingGroup.Control>
  {/snippet}
</RatingGroup.Root>

<style>
  :global([data-scope='rating-group'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='rating-group'][data-part='control']) {
    display: flex;
    align-items: center;
  }

  :global([data-scope='rating-group'][data-part='item']) {
    color: oklch(0.922 0 0);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global([data-scope='rating-group'][data-part='item'][data-highlighted]) {
    color: oklch(0.852 0.199 91.936);
  }
</style>
