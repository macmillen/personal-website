<script>
  import Link from "./link.svelte";
  import Paragraph from "./paragraph.svelte";
  import Section from "./section.svelte";
</script>

<Section id="about" n="01.">About Me</Section>

<div class="flex gap-10 max-w-screen-sm">
  <div class="flex flex-col gap-10">
    <div>
      <h2 class="text-2xl text-gray-500 mb-5">Graduation</h2>
      <div class="flex justify-between items-center">
        <div>
          <Paragraph>BSc Computer Science</Paragraph>
          <p class="text-gray-500">Technical University Mittelhessen, Gießen (Germany)</p>
        </div>
        <img class="w-32" src="/thm.png" alt="" />
      </div>
      <p class="text-gray-500">Grade : 1.9 (82%)</p>
    </div>

    <Paragraph>Hello! I'm Milan, a tech savvy software engineer based in Berlin.</Paragraph>

    <Paragraph>
      I have experience with the development of high performant web applications. My role as a
      frontend engineer at Passbase was to develop and take ownership of a diverse range of
      applications written in React, Next.js and GraphQL. Including the development of a Web-SDK for
      identity verification. Further applications I worked on include an customer dashboard and
      internal dashboard for managing identity verifications.
    </Paragraph>

    <Paragraph>
      After I left Passbase I founded <Link href="https://lettranslate.com/">lettranslate.com</Link>
      a translation management tool. The stack I used for this project included SvelteKit, Prisma ORM
      (with PostgreSQL), GraphQL, Node.js and TypeScript.
    </Paragraph>

    <Paragraph>
      I am used to work in an agile environment within the SCRUM framework. I also have experience
      leading meetings as a SCRUM master.
    </Paragraph>

    <Paragraph>
      Before my job at Passbase I have gained professional experience working for QuestionPro, a
      provider for survey feedback management systems. In particular, I have worked on a new
      prototype for a dashboard that allows the user to monitor ongoing surveys. I designed the
      complete project by myself including the backend, database and frontend using Angular, MongoDB
      and Node.js. Although I already knew those technologies from multiple personal projects, I
      could greatly improve during my internship in an autonomous manner.
    </Paragraph>
  </div>
</div>
