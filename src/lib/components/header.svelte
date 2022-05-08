<script>
  import HeaderLink from "./header-link.svelte";
</script>

<div
  class="fixed w-full left-0 top-0 h-20 flex items-center gap-5 justify-end text-gray-700 pr-12 bg-white/20 z-50"
  style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(5px); border: 1px solid rgba(255, 255, 255, 0.3);"
>
  <div class="h-full flex items-center gap-1">
    <HeaderLink href="#about">01. About</HeaderLink>
    <HeaderLink href="#work">02. Work</HeaderLink>
    <HeaderLink href="#contact">03. Contact</HeaderLink>
  </div>
  <a
    href="/cv_milan.pdf"
    target="_blank"
    class="border border-blue-500 rounded px-4 py-2 font-bold text-blue-500 hover:bg-blue-500 hover:text-white transition"
  >
    Resume
  </a>
</div>
