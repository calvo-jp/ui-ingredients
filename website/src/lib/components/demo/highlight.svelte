<script lang="ts">
  import {Input} from '$lib/components';
  import {Highlight} from 'ui-ingredients';

  let text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente consequatur, eos explicabo architecto exercitationem? Consequuntur repellat laboriosam ullam adipisci?';

  let query = $state('lorem');
</script>

<div class="mx-auto max-w-[24rem]">
  <Input
    value={query}
    oninput={(e) => {
      query = e.currentTarget.value;
    }}
  />

  <Highlight
    {text}
    {query}
    ignoreCase
    class="mt-5 rounded border border-neutral-200 p-4 text-sm dark:border-neutral-800 [&_mark]:inline-block [&_mark]:rounded [&_mark]:bg-indigo-500 [&_mark]:px-1.5 [&_mark]:font-medium [&_mark]:text-white"
  />
</div>
