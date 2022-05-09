<script lang="ts">
  import type { Tech } from "$lib/types/types";
  import Icon from "@iconify/svelte";
  import TechItem from "./tech-item.svelte";
  import WorkItemImage from "./work-item-image.svelte";
  import WorkItemLink from "./work-item-link.svelte";

  export let text: string;
  export let techs: Tech[];
  export let imgSrc: string;
  export let title: string;
  export let link: string | undefined = undefined;
  export let github: string | undefined = undefined;
</script>

<div class="max-w-screen-sm mb-10">
  <div class="flex items-center gap-3 mt-10">
    <Icon icon="mdi:folder" class="w-10 h-10 text-gray-500 hidden sm:block" />
    <WorkItemImage class="sm:hidden block w-20 h-20" {imgSrc} />
    <h2 class="text-xl">{title}</h2>
    <div class="flex-grow" />
    {#if link}
      <WorkItemLink icon="mdi:open-in-new" {link} />
    {/if}
    {#if github}
      <WorkItemLink icon="mdi:github" link={github} />
    {/if}
  </div>
  <div class="flex mb-4 gap-3" />

  <div class="flex gap-10">
    <WorkItemImage class="hidden sm:block" {imgSrc} />
    <div class="flex flex-col">
      <p class="text-gray-600">{text}</p>
      <div class="flex-grow" />
    </div>
  </div>

  <div class="flex gap-x-3 gap-y-1.5 flex-wrap mt-6">
    {#each techs as item}
      <TechItem {item} />
    {/each}
  </div>
</div>
