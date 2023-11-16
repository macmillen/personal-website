<script lang="ts">
  import { animate } from "$lib/actions/animate";
  import HeaderMobile from "$lib/components/header-mobile.svelte";
  import Header from "$lib/components/header.svelte";
  import Link from "$lib/components/link.svelte";
  import { headerIsOpen } from "$lib/stores/header.store";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import "../app.css";

  let windowWidth = 1000;
  let init = false;

  $: isMobile = windowWidth < 640;

  onMount(() => {
    setTimeout(() => (init = true), 0);
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if init}
  {#if isMobile}
    <HeaderMobile />
  {:else}
    <Header />
  {/if}
{/if}

<div
  class="max-w-screen-2xl mx-auto px-5 sm:px-20 sm:pt-52 lg:px-40 pt-28 pb-20 transition
    {$headerIsOpen ? 'opacity-40' : ''}"
>
  <slot />
</div>

<div
  use:animate={{ _class: "fade-in-up", delay: 1200, duration: 1000 }}
  class="hidden md:flex fixed w-10 md:left-3 lg:left-10 bottom-0 flex-col items-center text-grayBlue gap-5 invisible"
>
  <div class="flex flex-col gap-4">
    <a href="https://github.com/macmillen" target="_blank" rel="noopener noreferrer">
      <Icon
        icon="mdi:github"
        class="w-7 h-7 hover:text-coolTurquoise transition hover:-translate-y-1"
      />
    </a>
    <a href="https://www.linkedin.com/in/milan-jaritz" target="_blank" rel="noopener noreferrer">
      <Icon
        icon="mdi:linkedin"
        class="w-7 h-7 hover:text-coolTurquoise transition hover:-translate-y-1"
      />
    </a>
  </div>
  <div class="h-24 w-px bg-grayBlue" />
</div>

<div
  use:animate={{ _class: "fade-in-up", delay: 1200, duration: 1000 }}
  class="hidden md:flex fixed w-10 md:right-3 lg:right-10 bottom-0 writing [writing-mode:vertical-lr] items-center gap-5 text-blue-500 invisible"
>
  <a
    href="mailto:milan.jaritz@gmail.com"
    class="hover:text-coolTurquoise transition hover:-translate-y-1">milan.jaritz@gmail.com</a
  >

  <div class="h-24 w-px bg-grayBlue" />
</div>

<div class="py-14 bg-gray-800 sm:px-40 px-7 flex items-center mix-blend-exclusion invert">
  <div class="flex flex-col text-white gap-3 font-medium">
    <p>
      <Icon icon="mdi:wrench" class="inline mr-1" />
      Built with
      <Link href="https://kit.svelte.dev/">SvelteKit</Link>
      &
      <Link href="https://tailwindcss.com/">Tailwind</Link>
      [ Js: 34KB, CSS: 4.4KB ] (gzip)
    </p>
    <p>
      <Icon icon="mdi:brush" class="inline mr-1" />
      Designed & Built by Milan Jaritz
    </p>
    <p>
      <Icon icon="mdi:earth" class="inline mr-1" />
      Hosted on <Link href="https://vercel.com/">Vercel</Link>
    </p>
    <p>
      <Icon icon="mdi:lightbulb" class="inline mr-1" />
      Inspired by <Link href="https://brittanychiang.com/">Brittany Chiang</Link>
    </p>
  </div>
</div>

<svelte:head>
  <title>Milan Jaritz Portfolio</title>
  {#if $headerIsOpen}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>
