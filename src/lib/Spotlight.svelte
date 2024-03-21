<script>
  import { onMount, onDestroy } from 'svelte';

  let container;
  let mouse = {
    x: 0,
    y: 0,
  };

  function onMouseMove(event) {
    const rect = container.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;

    container.style.setProperty('--mouse-x', `${mouse.x}px`);
    container.style.setProperty('--mouse-y', `${mouse.y}px`);
  }

  // Initialize and clean up the event listeners
  onMount(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  });
</script>

<div
  bind:this={container}
  class="safari-fix cursor-default w-full relative h-full bg-neutral-700 rounded-lg p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-neutral-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-neutral-200 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
  on:mousemove={onMouseMove}
>
  <!-- Card content goes here -->
  <div class="safari-fix relative h-full bg-black p-2 rounded-[inherit] z-20 overflow-hidden">
    <!-- Radial gradient -->
    <div class="safari-fix absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
      <div class="safari-fix absolute inset-0 translate-z-0 bg-neutral-800 rounded-full blur-[80px]"></div>
    </div>
    <div class="safari-fix flex flex-col h-full items-center text-center">
      <!-- Text -->
      <slot />
    </div>
  </div>
</div>

<style>
  /* You may need to use global styles if you want to style pseudo-elements in Svelte */
  .before:hover::before, .after:hover::after {
    opacity: 1; /* Example to show hover state */
  }
  .safari-fix {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0)
  }
</style>
