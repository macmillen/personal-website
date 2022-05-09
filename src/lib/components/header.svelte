<script>
  import HeaderLink from "./header-link.svelte";
</script>

<div
  class="fixed w-full left-0 top-0 sm:h-20 h-16 flex items-center gap-5 text-gray-700 sm:px-12 px-4 bg-white/20 z-50"
  style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(5px); border: 1px solid rgba(255, 255, 255, 0.3);"
>
  <div class="h-full items-center sm:gap-1 flex">
    <HeaderLink href="#about">About</HeaderLink>
    <HeaderLink href="#projects">Projects</HeaderLink>
    <HeaderLink href="#contact">Contact</HeaderLink>
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
