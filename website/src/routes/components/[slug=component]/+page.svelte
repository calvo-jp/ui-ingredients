<script lang="ts">
  let {data} = $props();

  let api = $derived(Object.entries(data.apiJson ?? {}));
  let html = $derived(data.html);
  let icon = $derived(data.icon);
</script>

{#if icon}
  <div class="mb-12 overflow-hidden rounded-lg">
    {@html icon}
  </div>
{/if}

<div class="prose prose-neutral prose-invert min-w-full">
  {@html html}
</div>

{#if api.length > 0}
  <div class="mt-12">
    {#each api as [k, o]}
      <div>
        <span>
          {k}
        </span>
        <span>{o.type}</span>
      </div>

      <div>
        {o.description}
      </div>
    {/each}
  </div>
{/if}
