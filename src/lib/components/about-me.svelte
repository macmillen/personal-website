<script>
  import Paragraph from "./paragraph.svelte";
  import Section from "./section.svelte";
</script>

<Section id="about" n="01.">About Me</Section>

<div class="flex gap-10">
  <div class="flex flex-col gap-10">
    <Paragraph>Hello! I'm Milan, a software engineer based in Berlin.</Paragraph>

    <Paragraph>
      Before my current job at Passbase I have gained professional experience working for
      QuestionPro, a provider for survey feedback management systems. In particular, I have worked
      on a new prototype for a dashboard that allows the user to monitor ongoing surveys. I designed
      the complete project by myself including the backend, database and frontend using Angular,
      MongoDB and Node.js. Although I already knew those technologies from multiple personal
      projects, I could greatly improve during my internship in an autonomous manner.
    </Paragraph>

    <Paragraph>
      Shortly after graduating from THM Mittelhessen, I joined the engineering team at Passbase
      where I work as a frontend engineer on a wide variety of interesting and meaningful projects
      on a daily basis.
    </Paragraph>

    <Paragraph>Here are a few technologies I've been working with recently:</Paragraph>
  </div>
</div>
