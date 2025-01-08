<script lang="ts">
  interface Item {
    label: string;
    value: string;
  }

  let {items}: {items: Item[]} = $props();
</script>
