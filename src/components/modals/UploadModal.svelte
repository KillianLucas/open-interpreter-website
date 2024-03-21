<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { closeModal, openModal } from './svelte-modals/modalsStore';
	import {
		assignedFrame,
		availableFrames,
		displayPicker,
		displayedFrame,
		getAvailableFrames
	} from '../../stores/frames';
	import ThanksModal from './ThanksModal.svelte';
	import Guidelines from './Guidelines.svelte';

	export let isOpen = true;
	let base64FileData = '';
	let message = '';
	async function convertToBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result.toString());
			reader.onerror = (error) => reject(error);
		});
	}

	async function handleFileChange(event) {
		const file = event.target.files[0];
		if (file) {
			//@ts-ignore
			base64FileData = await convertToBase64(file);

			message = `Selected File: ${file.name}`;
		}
	}

	async function uploadFrame() {
		message = `Uploading...`;

		const response = await fetch('/api/upload', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				base64FileData,
				fileNumber: $assignedFrame
			})
		});
		const data = await response.json();

		if (data.status === 'success') {
			message = `Frame uploaded!`;
			await getAvailableFrames();

			const randomFrame = $availableFrames[Math.floor(Math.random() * $availableFrames.length)];
			assignedFrame.set(randomFrame);
			displayedFrame.set($availableFrames.indexOf(randomFrame) + 1);
			displayPicker.set(true);
			closeModal();

			setTimeout(() => {
				openModal(ThanksModal);
			}, 1000);
		} else {
			// console.log('FILE NOT UPLOADED');
			message = `Error uploading frame, please try again.`;
		}
	}
</script>

{#if isOpen}
	<div
		role="dialog"
		class="transition-fade pointer-events-none fixed inset-0 z-[500] flex items-center justify-center"
		transition:fade|global
	>
		<div
			class="pointer-events-auto relative flex h-fit w-[60vw] min-w-[240px] flex-col justify-between overflow-auto rounded-[6px] bg-neutral-900 px-12 py-6"
		>
			<button
				class="group absolute right-2 top-2 cursor-default rounded-full p-2 transition hover:bg-neutral-700"
				on:click|preventDefault={() => closeModal()}
			>
				<Icon
					icon="fa-solid:times"
					class="h-6 w-6 text-neutral-500 transition group-hover:text-white"
				/>
			</button>

			<h1 class="mb-4 text-xl font-bold text-white">Upload</h1>

			<section>
				<Guidelines upload={true} />
				{#if base64FileData}
					<p class="my-4 text-center text-lg text-white">{message}</p>

					<div class="flex w-full items-center justify-center">
						<button
							on:click={uploadFrame}
							class="group z-50 flex h-min cursor-pointer items-center gap-2 border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
							>Upload

							<Icon icon="fa-solid:upload" class="ml-2 h-4 w-4 text-white group-hover:text-black" />
						</button>
					</div>
				{:else}
					<div class="mb-4 mt-8 flex w-full items-center justify-center">
						<label
							class="z-50 h-min cursor-pointer border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
							for="file-upload">Choose File</label
						>
						<input
							id="file-upload"
							type="file"
							accept=".jpg,.jpeg,.png"
							on:change={handleFileChange}
							class="hidden"
						/>
					</div>
				{/if}

				<div class="justify center flex items-center gap-4">
					<img
						src="https://neyguovvcjxfzhqpkicj.supabase.co/storage/v1/object/public/video-files/initial/63.jpg"
						class="h-auto w-80"
						alt="Reference frame"
					/>

					<Icon icon="fa-solid:arrow-right" class="h-6 w-6 text-white" />
					<img
						src="https://neyguovvcjxfzhqpkicj.supabase.co/storage/v1/object/public/video-files/pre/63.jpg"
						class="h-auto w-80"
						alt="Hand-drawn frame"
					/>
				</div>
			</section>
		</div>
	</div>
{/if}
