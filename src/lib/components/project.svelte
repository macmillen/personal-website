<script>
  import ProjectItem from "./project-item.svelte";
  import Section from "./section.svelte";
</script>

<Section id="projects" n="03.">Projects</Section>

<div class="flex flex-col divide-y -mt-10">
  <ProjectItem
    link="https://github-changelogger.vercel.app/"
    github="https://github.com/macmillen/github-changelogger"
    text="GitHub ChangeLogger is a tool to track changes across public code repositories hosted on github.com. It only uses the public GitHub API and requires no authentication. The app works without any outbound network traffic and all data is stored inside the local storage."
    techs={["svelte", "typescript", "tailwind"]}
    imgSrc="/projects/changelogger.jpg"
    title="ChangeLogger"
  />
  <ProjectItem
    github="https://github.com/macmillen/tool23"
    text="An app that works with geo data and spherical distances to show available items in your area for rental. (student project)"
    techs={["ionic", "angular", "typescript", "nodejs", "mongodb"]}
    imgSrc="/projects/tool23.jpg"
    title="Tool23"
  />
  <ProjectItem
    link="https://mymdb-d5846.firebaseapp.com/"
    text="A webapp where you can save all of your favorite movies, series and games. Create watchlists and share them with your friends!"
    techs={["angular", "typescript", "nodejs", "mongodb", "firebase"]}
    imgSrc="/projects/mymdb.jpg"
    title="MyMDb"
  />
  <ProjectItem
    link="https://roommate-matcher-df7ae.firebaseapp.com/"
    text="The purpose of the project is to ensure new students are paired with a compatible roommate at the VIA University Collage. (student project)"
    techs={["angular", "typescript", "firebase"]}
    imgSrc="/projects/roommate_matcher.jpg"
    title="Roommate Matcher"
  />
  <ProjectItem
    link="https://space-chaos.web.app/"
    text="A little Space Shooter game."
    techs={["js", "p5"]}
    imgSrc="/projects/space_chaos.jpg"
    title="Space Chaos"
  />
  <ProjectItem
    link="https://macmillen.github.io/p5_tetris/src/"
    github="https://github.com/macmillen/p5_tetris"
    text="A Tetris clone."
    techs={["js", "p5"]}
    imgSrc="/projects/tetris.jpg"
    title="Tetris"
  />
  <ProjectItem
    link="https://macmillen.github.io/p5_gaussian_distribution/"
    github="https://github.com/macmillen/p5_gaussian_distribution"
    text="Simulation of two n-sided dices."
    techs={["js", "p5"]}
    imgSrc="/projects/gaussian_distribution.jpg"
    title="Gaussian Distribution"
  />
  <ProjectItem
    github="https://github.com/macmillen/processing_maze_solver"
    text="Brute force algorithm to find a path to the and of the labyrinth."
    techs={["processing"]}
    imgSrc="/projects/maze_solver.jpg"
    title="Maze Solver"
  />
  <ProjectItem
    github="https://github.com/macmillen/3D_visualization"
    text="A really cool 3D visualization tool to play around with. You can choose from different shapes like cube, mandala and dodecahedron while being able to activate all kinds of graphic effects."
    techs={["processing"]}
    imgSrc="/projects/3d_visualization.jpg"
    title="3D Visualization"
  />
</div>
