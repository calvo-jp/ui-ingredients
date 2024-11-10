<script lang="ts">
  interface Item {
    value: string;
    label: string;
    disabled?: boolean;
  }

  interface Props {
    items: Item[];
  }

  let {items}: Props = $props();
</script>
