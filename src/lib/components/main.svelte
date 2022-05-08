<script>
  import Emph from "./emph.svelte";
  import Paragraph from "./paragraph.svelte";
  import TechItem from "./tech-item.svelte";
</script>

<p class="font-bold text-7xl text-gray-700">Milan Jaritz</p>

<div class="absolute right-44 top-28">
  <div class="w-[401px] h-[500px] mt-8 relative group">
    <img
      src="/milan.jpg"
      alt="author"
      class="w-full h-full rounded-xl border-dashed border-2 hover:border-coolTurquoise hover:rotate-2 border-black z-10 absolute m-3 hover:m-0 transition-all "
    />
    <div
      class="bg-coolTurquoise w-full group-hover:bg-transparent h-full absolute rounded-xl top-0 transition"
    />
  </div>
</div>

<div class="mt-6 space-y-2">
  <Paragraph>I'm a <Emph>fullstack</Emph> software engineer based in Berlin.</Paragraph>
  <Paragraph>I build <Emph>websites, applications</Emph>, and everything in between.</Paragraph>
  <Paragraph>Founder of <Emph>lettranslate</Emph>.</Paragraph>
</div>

<p class="font-bold mt-8 text-gray-600 text-lg">My current favorite tech:</p>
<div class="flex mt-2 gap-2">
  <TechItem item="typescript" />
  <TechItem item="svelte" />
  <TechItem item="prisma" />
  <TechItem item="tailwind" />
</div>

<a href="/#contact">
  <button
    class="rounded text-2xl bg-blue-500 text-white px-6 py-3 mt-10 hover:bg-blue-600 transition hover:ring-4"
  >
    Get in touch
  </button>
</a>
