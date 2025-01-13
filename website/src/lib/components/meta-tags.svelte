<script lang="ts">
  interface MetaTags {
    title?: string;
    description?: string;
    image?: string;
  }

  let {...props}: MetaTags = $props();

  let defaultProps = {
    title: 'UI Ingredients',
    description: 'Headless component library for Svelte powered by zag',
    image: 'https://ui-ingredients.vercel.app/opengraph-banner.png',
  } satisfies MetaTags;

  let {title, description, image} = $derived(
    Object.assign(defaultProps, props),
  );
</script>

<svelte:head>
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta name="description" content={description} />
  <meta name="twitter:description" content={description} />
  <meta property="og:description" content={description} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={image} />
  <meta property="og:image" content={image} />
  <meta name="twitter:site" content="UI Ingredients" />
  <meta property="og:site_name" content="UI Ingredients" />
</svelte:head>
