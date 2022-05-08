<script lang="ts">
  import type { Tech, TechData } from "$lib/types/types";
  import type { MappedSet } from "$lib/utils/type-helpers";
  import Icon from "@iconify/svelte";

  export let item: Tech;

  const itemMap: MappedSet<Tech, TechData> = {
    angular: { icon: "mdi:angular", text: "Angular" },
    typescript: { icon: "mdi:language-typescript", text: "TypeScript" },
    firebase: { icon: "mdi:firebase", text: "Firebase" },
    nodejs: { icon: "mdi:nodejs", text: "Node.js" },
    ionic: { icon: "ion:ionic", text: "Ionic" },
    mongodb: { icon: "simple-icons:mongodb", text: "MongoDB" },
    p5: { icon: "simple-icons:p5dotjs", text: "p5.js" },
    processing: { icon: "simple-icons:processingfoundation", text: "Processing" },
    js: { icon: "mdi:language-javascript", text: "JavaScript" },
    svelte: { icon: "simple-icons:svelte", text: "Svelte" },
    prisma: { icon: "simple-icons:prisma", text: "Prisma" },
    postgres: { icon: "simple-icons:postgresql", text: "PostgreSQL" },
    graphql: { icon: "simple-icons:graphql", text: "GraphQL" },
    tailwind: { icon: "simple-icons:tailwindcss", text: "Tailwind" },
  };

  $: itemData = itemMap[item];
</script>

<div class="rounded-full bg-gray-200 text-gray-600 px-2 py-1 flex items-center gap-1 text-sm">
  <Icon icon={itemData.icon} class="w-5 h-5 text-gray-500" />
  {itemData.text}
</div>
