<script lang="ts">
  import {RatingGroup} from '$lib/index.js';
</script>

<RatingGroup.Root>
  {#snippet children(context)}
    <RatingGroup.Label>Label</RatingGroup.Label>

    <RatingGroup.Control>
      {#each context.items as index}
        <RatingGroup.Item {index} />
      {/each}
    </RatingGroup.Control>
  {/snippet}
</RatingGroup.Root>
