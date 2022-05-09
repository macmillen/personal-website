<script>
  import Icon from "@iconify/svelte";
  import ProfileImage from "./profile-image.svelte";
  import Section from "./section.svelte";
</script>

<Section id="contact" n="03.">Contact</Section>

<div class="flex flex-col items-center">
  <ProfileImage />
  <div class="mt-7 flex flex-col items-center text-lg text-gray-600">
    <p class="font-bold">Milan Jaritz</p>
    <a href="mailto:milan.jaritz@gmail.com">milan.jaritz@gmail.com</a>
    <a href="tel:+4915778200260">+49 157 78200260</a>
    <p>
      in Berlin
      <Icon icon="mdi:heart" class="w-5 h-5 text-red-600 inline" />
    </p>
    <div class="rounded-full w-2 h-2 bg-gray-400 my-3" />
    <a
      href="https://github.com/macmillen/"
      class="font-mono text-blue-500 hover:text-coolTurquoise transition-colors"
      target="_blank">github.com/macmillen</a
    >
    <a
      href="https://www.linkedin.com/in/milan-jaritz/"
      class="font-mono text-blue-500 hover:text-coolTurquoise transition-colors"
      target="_blank">linkedin.com/in/milan-jaritz</a
    >
  </div>
</div>

<img src="/private_life.jpg" width="600px" class="mx-auto mt-60 rounded-3xl" alt="" />
