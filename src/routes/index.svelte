<script>
  import AboutMe from "$lib/components/about-me.svelte";
  import Contact from "$lib/components/contact.svelte";
  import Main from "$lib/components/main.svelte";
  import Project from "$lib/components/project.svelte";
  import Work from "$lib/components/work.svelte";
</script>

<Main />
<div class="max-w-screen-sm mx-auto">
  <Work />
  <AboutMe />
  <Project />
  <Contact />
</div>
