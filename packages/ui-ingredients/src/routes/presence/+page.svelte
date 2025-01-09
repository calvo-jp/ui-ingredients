<script lang="ts">
  import {Presence} from '$lib/index.js';
  import {Button} from '../shared/index.js';

  let present = $state(false);
</script>

<Button
  onclick={() => {
    present = !present;
  }}
  class="mb-4"
>
  Click me
</Button>

<Presence
  {present}
  lazyMount
  keepMounted={false}
  class="data-open:animate-fade-in data-closed:animate-fade-out max-w-[32rem] rounded border p-5"
>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eligendi
  corrupti veniam maxime rem eaque praesentium dignissimos asperiores. Beatae
  modi nihil delectus eaque! Ipsam.
</Presence>
