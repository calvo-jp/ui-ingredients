<script lang="ts">
  import {FocusTrap} from '$lib/index.js';

  let trapped = $state(false);

  $inspect(trapped);
</script>

<button
  type="button"
  onclick={() => {
    trapped = !trapped;
  }}
  style="border:1px solid var(--border-default);height:40px;padding:0px 14px;"
>
  {#if trapped}
    End trap
  {:else}
    Start trap
  {/if}
</button>

<FocusTrap
  returnFocusOnDeactivate={false}
  disabled={!trapped}
  style="margin-top:1rem;display:flex;flex-direction:column;gap:1rem;max-width:400px;"
>
  <input
    type="email"
    placeholder="email"
    style="border:1px solid var(--border-default);height:40px;padding:0px 14px;"
  />
  <textarea
    placeholder="message"
    style="border:1px solid var(--border-default);padding:12px 14px;"
  ></textarea>
  <button
    type="button"
    onclick={() => (trapped = false)}
    style="border:1px solid var(--border-default);height:40px;padding:0px 14px;"
  >
    Submit
  </button>
</FocusTrap>
