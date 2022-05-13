<script lang="ts">
  import type { Tech } from "$lib/types/types";
  import Icon from "@iconify/svelte";
  import ProjectItemImage from "./project-item-image.svelte";
  import ProjectItemLink from "./project-item-link.svelte";
  import TechItemContainer from "./tech-item-container.svelte";
  import TechItem from "./tech-item.svelte";

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
    <ProjectItemImage class="sm:hidden block w-20 h-20" {imgSrc} />
    <div class="flex justify-between w-full items-center flex-wrap gap-2">
      <h2 class="text-xl text-gray-700">{title}</h2>
      <div class="flex gap-2">
        {#if link}
          <ProjectItemLink icon="mdi:open-in-new" {link} />
        {/if}
        {#if github}
          <ProjectItemLink icon="mdi:github" link={github} />
        {/if}
      </div>
    </div>
  </div>
  <div class="flex mb-4 gap-3" />

  <div class="flex gap-10">
    <ProjectItemImage class="hidden sm:block" {imgSrc} />
    <div class="flex flex-col">
      <p class="text-gray-600">{text}</p>
      <div class="flex-grow" />
    </div>
  </div>

  <TechItemContainer class="mt-6">
    {#each techs as item}
      <TechItem {item} />
    {/each}
  </TechItemContainer>
</div>
