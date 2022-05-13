<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";
  import HeaderLink from "./header-link.svelte";

  let isOpen = false;
  let windowWidth = 1000;

  $: isMobile = windowWidth < 640;
</script>

{#if isOpen || !isMobile}
  <div
    transition:fly={{ y: 200 }}
    class="fixed w-full left-0 sm:top-0 bottom-0 sm:h-20 flex sm:items-center items-end text-gray-700 sm:px-12 px-8 py-5 sm:py-0 bg-white/90 z-50 flex-row-reverse sm:flex-row"
    style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3);"
  >
    <div class="h-full w-full items-end sm:items-center gap-3 sm:gap-5 flex flex-col sm:flex-row">
      {#if isMobile}
        <div on:click={() => (isOpen = false)}>
          <Icon icon="mdi:close" class="w-8 h-8 text-gray-400" />
        </div>
      {/if}
      <HeaderLink n="01." href="#work" on:click={() => (isOpen = false)}>Work</HeaderLink>
      <HeaderLink n="02." href="#about" on:click={() => (isOpen = false)}>About</HeaderLink>
      <HeaderLink n="03." href="#projects" on:click={() => (isOpen = false)}>Projects</HeaderLink>
      <HeaderLink n="04." href="#contact" on:click={() => (isOpen = false)}>Contact</HeaderLink>
    </div>

    <div class="flex-grow" />

    <a
      href="/cv_milan.pdf"
      target="_blank"
      class="border border-blue-500 rounded px-4 py-2 font-bold text-blue-500 hover:bg-blue-500 hover:text-white transition"
    >
      Resume
    </a>
  </div>
{/if}

{#if !isOpen && isMobile}
  <div
    on:click={() => (isOpen = !isOpen)}
    class="bg-gray-100/80 border rounded-full fixed bottom-2 right-2 p-4"
  >
    <Icon icon="mdi:menu" class="w-10 h-10 text-gray-500" />
  </div>
{/if}

<svelte:window bind:innerWidth={windowWidth} />
