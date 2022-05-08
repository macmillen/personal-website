<script>
  import Header from "$lib/components/header.svelte";
  import Icon from "@iconify/svelte";
  import "../app.css";
</script>

<Header />

<div class="max-w-screen-2xl mx-auto px-40 py-52">
  <slot />
</div>

<div class="fixed w-10 left-10 bottom-0 flex flex-col items-center text-grayBlue gap-5">
  <div class="flex flex-col gap-4">
    <a href="https://github.com/macmillen" target="_blank" rel="noopener noreferrer">
      <Icon
        icon="mdi:github"
        class="w-7 h-7 hover:text-coolTurquoise transition hover:-translate-y-1"
      />
    </a>
    <a href="https://www.linkedin.com/in/milan-jaritz" target="_blank" rel="noopener noreferrer">
      <Icon
        icon="mdi:linkedin"
        class="w-7 h-7 hover:text-coolTurquoise transition hover:-translate-y-1"
      />
    </a>
  </div>
  <div class="h-24 w-px bg-grayBlue" />
</div>

<div
  class="fixed w-10 right-10 bottom-0 writing [writing-mode:vertical-lr] flex items-center gap-5 text-blue-500"
>
  <a
    href="mailto:milan.jaritz@gmail.com"
    class="hover:text-coolTurquoise transition hover:-translate-y-1">milan.jaritz@gmail.com</a
  >

  <div class="h-24 w-px bg-grayBlue" />
</div>
