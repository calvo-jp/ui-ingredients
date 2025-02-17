<script lang="ts">
  import {RatingGroup} from '$lib/index.js';

  let value = $state(1);
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
        <RatingGroup.Item {index}>⭐</RatingGroup.Item>
      {/each}
    </RatingGroup.Control>
  {/snippet}
</RatingGroup.Root>
