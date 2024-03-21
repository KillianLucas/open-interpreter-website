<script>
	import { fade } from 'svelte/transition';
	import Modals from './../components/modals/svelte-modals/Modals.svelte';
	import './styles.css';
	import { closeModal } from '../components/modals/svelte-modals/modalsStore';
</script>

<main>
	<slot />
</main>
<Modals>
	<div
		slot="backdrop"
		class="backdrop"
		role="button"
		tabindex="-1"
		on:click={closeModal}
		transition:fade
		on:keydown|preventDefault={(event) => {
			if (event.key === 'Escape') {
				closeModal();
			}
		}}
	/>
</Modals>
