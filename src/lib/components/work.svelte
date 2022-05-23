<script lang="ts">
  import { animate } from "$lib/actions/animate";
  import type { Tech } from "$lib/types/types";
  import { scale } from "svelte/transition";
  import Paragraph from "./paragraph.svelte";
  import Section from "./section.svelte";
  import TechItemContainer from "./tech-item-container.svelte";
  import TechItem from "./tech-item.svelte";
  import WorkItem from "./work-item.svelte";

  type Item = {
    time: string;
    jobTitle: string;
    company: string;
    bullets: string[];
    url: string;
    techItems: Tech[];
  };

  const items: Item[] = [
    {
      company: "lettranslate",
      url: "https://lettranslate.com/",
      time: "April 2021 - Present",
      bullets: [
        "Foundation of lettranslate.com, a translation management software",
        "Development of a GitHub integration for translation synchronization",
        "Creation of a web application for managing translations",
      ],
      jobTitle: "Fullstack Engineer",
      techItems: ["svelte", "typescript", "graphql", "prisma", "postgres", "tailwind"],
    },
    {
      company: "Passbase",
      url: "https://passbase.com/",
      time: "October 2019 - April 2021",
      bullets: [
        "Project owner of Web-SDK of identity verification software",
        "Development of the customer dashboard and internal backoffice suite",
        "Lead role as a SCRUM master and worked in agile environment",
      ],
      jobTitle: "Frontend Engineer",
      techItems: ["react", "next", "typescript", "graphql"],
    },
    {
      company: "QuestionPro",
      url: "https://www.questionpro.com/",
      time: "February 2019 - April 2019",
      bullets: [
        "Development of a Survey Dashboard with Angular",
        "Email parser with the Gmail API",
        "Survey Notification App with Flutter",
        "Backend / DB Development with Node.js and MongoDB",
      ],
      jobTitle: "Software Engineer Intern",
      techItems: ["angular", "flutter", "mongodb", "nodejs"],
    },
  ];

  let selectedItem = items[0];
</script>

<Section id="work" n="01.">Work</Section>

<div
  class="flex sm:flex-row flex-col sm:gap-14 gap-7 invisible"
  use:animate={{ _class: "fade-in-up", delay: 200 }}
>
  <div class="flex sm:flex-col flex-row gap-2 sm:overflow-x-visible overflow-x-scroll">
    {#each items as item}
      <WorkItem on:click={() => (selectedItem = item)} selected={item === selectedItem}>
        {item.company}
      </WorkItem>
    {/each}
  </div>
  {#key selectedItem}
    <div in:scale={{ start: 0.8, duration: 500 }}>
      <p class="text-gray-700 font-mono mb-1 font-bold text-xl">
        {selectedItem.jobTitle}
        <a
          href={selectedItem.url}
          class="text-coolTurquoise font-bold hover:underline"
          target="_blank"
        >
          @{selectedItem.company}
        </a>
      </p>
      <p class="text-blue-500 font-mono mb-3">
        {selectedItem.time}
      </p>
      <ul class="list-[square] text-gray-500 pl-4">
        {#each selectedItem.bullets as bullet}
          <li>
            {bullet}
          </li>
        {/each}
      </ul>

      <TechItemContainer class="mt-4">
        {#each selectedItem.techItems as item}
          <TechItem {item} />
        {/each}
      </TechItemContainer>
    </div>
  {/key}
</div>

<div class="mt-20">
  <h2 class="text-2xl text-gray-700 mb-2 italic">Graduation</h2>
  <div class="flex justify-between items-start sm:flex-row flex-col-reverse gap-3 sm:gap-0">
    <div>
      <Paragraph>BSc Computer Science</Paragraph>
      <p class="text-gray-500">Technical University Mittelhessen, Gießen (Germany)</p>
    </div>
    <img class="w-32" src="/thm.png" alt="" />
  </div>
  <p class="text-gray-500">Grade : 1.9 (82%)</p>
</div>
