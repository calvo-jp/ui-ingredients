<script lang="ts">
  import {Progress} from '$lib/index.js';
</script>

<Progress.Root>
  <Progress.Label>Label</Progress.Label>
  <Progress.View state="complete" />
  <Progress.Circle>
    <Progress.CircleTrack />
    <Progress.CircleRange />
  </Progress.Circle>
  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
  <Progress.ValueText />
</Progress.Root>
