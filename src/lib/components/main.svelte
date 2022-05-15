<script lang="ts">
  import { animate, getFadeUpDelay } from "$lib/actions/animate";
  import AnimatedProfileImage from "./animated-profile-image.svelte";
  import Emph from "./emph.svelte";
  import Link from "./link.svelte";
  import Paragraph from "./paragraph.svelte";
  import ProfileImage from "./profile-image.svelte";
  import TechItem from "./tech-item.svelte";
</script>

<div class="flex gap-10 justify-between items-center mb-20">
  <div>
    <p
      class="font-bold sm:text-7xl text-5xl text-gray-700 text-center sm:text-left invisible"
      use:animate={{ _class: "fade-in-up", delay: getFadeUpDelay(0) }}
    >
      Milan Jaritz
    </p>

    <div
      class="sm:hidden flex justify-center mt-5 invisible"
      use:animate={{ _class: "fade-in-up", delay: getFadeUpDelay(1) }}
    >
      <ProfileImage />
    </div>

    <div
      class="mt-6 space-y-2 invisible"
      use:animate={{ _class: "fade-in-up", delay: getFadeUpDelay(1) }}
    >
      <Paragraph size="lg">
        I'm a <Emph>fullstack</Emph> software engineer based in Berlin.
      </Paragraph>
      <Paragraph size="lg">
        I build <Emph>websites, applications</Emph>, and everything in between.
      </Paragraph>
      <Paragraph size="lg">
        Founder of <Link href="https://lettranslate.com/">lettranslate.com</Link>.
      </Paragraph>
    </div>

    <div use:animate={{ _class: "fade-in-up", delay: getFadeUpDelay(2) }} class="invisible">
      <p class="font-bold mt-8 text-gray-600 text-lg">My current favorite tech:</p>
      <div class="flex mt-2 gap-2 flex-wrap">
        <TechItem item="typescript" />
        <TechItem item="svelte" />
        <TechItem item="prisma" />
        <TechItem item="tailwind" />
      </div>
    </div>

    <a href="/#contact">
      <button
        use:animate={{ _class: "fade-in-up", delay: getFadeUpDelay(3) }}
        class="rounded text-2xl bg-blue-500 text-white px-6 py-3 mt-10 hover:bg-blue-600 transition hover:ring-4 w-full sm:w-[unset] invisible"
      >
        Get in touch
      </button>
    </a>
  </div>
  <AnimatedProfileImage />
</div>
