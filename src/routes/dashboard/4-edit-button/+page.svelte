<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Button from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Table from '$lib/components/ui/table/index.js';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from "$lib/components/ui/textarea/index.js";
	import { SquarePen, Upload } from "@lucide/svelte";

	// Di pengembangan selanjutnya, data ini akan datang dari database FIK. 
	// Untuk pengembangan UI/UX ini, sementara kami menggunakan array biasa.
	let photos = [
		{ id: 1, title: 'ReadZone', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+1' },
		{ id: 2, title: 'Kalender Akademik', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+2' },
		{ id: 3, title: 'POB FIK UPNVJ', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+3' },
		{ id: 4, title: 'Statistik FIK UPNVJ', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+4' }
	];

	let activeModal: 'edit' | null = null;
	let selectedPhoto: (typeof photos)[0] | null = null;

    let isDialogOpen = false;
    $: isDialogOpen = activeModal === 'edit';

	let formTitle = '';
	let formFile: File | null = null;
	let formFilePreview = '';

	// --- 2. FUNGSI-FUNGSI UNTUK MODAL ---
	function openModal(type: typeof activeModal, photo: (typeof photos)[0] | null = null) {
		activeModal = type;
		selectedPhoto = photo;

		// Reset form state setiap kali modal dibuka
		formTitle = photo?.title ?? '';
		formFile = null;
		formFilePreview = photo?.imageSrc ?? '';
	}

	function closeModal() {
		activeModal = null;
	}

	function handleFileChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files && target.files.length > 0) {
			const file = target.files[0];
			const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
			if (!allowedTypes.includes(file.type)) {
				alert('Format file tidak didukung! Harap unggah JPG, JPEG, atau PNG.');
				target.value = ''; // Reset input file
				return;
			}
			formFile = file;
			formFilePreview = URL.createObjectURL(file);
		}
	}

	function handleSave() {
		if (!formTitle) {
			alert('Judul tidak boleh kosong!');
			return;
		}

		if (activeModal === 'edit' && selectedPhoto) {
			photos = photos.map((p) =>
				p.id === selectedPhoto!.id ? { ...p, title: formTitle, imageSrc: formFilePreview } : p
			);
		}

		closeModal();
	}
</script>

<div>
    <h2 style="font-size: 24px;">Edit Tombol</h2>
</div>

<div class="p-10 flex flex-col gap-6">
    <Card.Root>
        <Card.Content class="p-6">
            <div class="flex items-center justify-between space-x-4">
                <div class="flex-grow">
                    <h3 class="font-semibold tracking-tight">Menu Layanan FIK</h3>
                    <p class="text-sm text-muted-foreground">Klik salah satu menu di bawah ini untuk melihat lebih lanjut</p>
                </div>
                <div>
                    <Dialog.Root>
                        <Dialog.Trigger>
                            {#snippet child({ props })}
                                <Button.Root {...props} variant="outline" size="icon" aria-label="Edit">
                                    <SquarePen class="h-4 w-4" />
                                </Button.Root>
                            {/snippet}
                        </Dialog.Trigger>
                        <Dialog.Content class="sm:max-w-[425px]">
                            <Dialog.Header>
                                <Dialog.Title>Edit</Dialog.Title>
                            </Dialog.Header>
                            
                            <div class="grid gap-4 py-4">
                                <div class="grid w-full gap-y-4">
                                    <div>
                                        <label for="judul" class="block text-sm font-medium mb-2">Judul :</label>
                                        <input id="judul" class="w-full border rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label for="desc" class="block text-sm font-medium mb-2">Deskripsi :</label>
                                        <textarea id="desc" class="w-full border rounded-md p-2" rows="4"></textarea>
                                    </div>
                                </div>
                            </div>
                            <Dialog.Footer>
                                <Dialog.Close>
									<Button.Root type="submit">Simpan</Button.Root>
                                </Dialog.Close>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Root>
                </div>
            </div>
        </Card.Content>
    </Card.Root>

    <Table.Root class="mt-6">
		<Table.Body>
			{#each photos as photo, i}
				<Table.Row>
					<Table.Cell>{i + 1}.</Table.Cell>
					<Table.Cell class="font-medium">{photo.title}</Table.Cell>
					<Table.Cell class="text-right">
						<div class="flex justify-end gap-2">
						<Dialog.Root>
							<Dialog.Trigger>
								<Button.Root variant="outline" size="icon" class="bg-green-500 hover:bg-green-600 text-white">
									<SquarePen class="h-4 w-4" />
								</Button.Root>
							</Dialog.Trigger>
							<Dialog.Content class="sm:max-w-[425px]">
								<Dialog.Header>
									<Dialog.Title>Edit Tautan</Dialog.Title>
								</Dialog.Header>
								
								<div class="grid gap-4 py-4">
									<div class="grid w-full gap-y-4">
										<div>
											<label for="judul" class="block text-sm font-medium mb-2">Judul :</label>
											<input id="judul" class="w-full border rounded-md p-2" />
										</div>
										<div>
											<label for="judul" class="block text-sm font-medium mb-2">Tautan :</label>
											<input id="judul" class="w-full border rounded-md p-2" />
										</div>
									</div>
								</div>
								<Dialog.Footer>
									<Dialog.Close>
										<Button.Root type="submit">Simpan</Button.Root>
									</Dialog.Close>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
						</div>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>


<Dialog.Root bind:open={isDialogOpen} onOpenChange={(open) => !open && closeModal()}>
	<Dialog.Content>
		<Dialog.Header>
			{#if activeModal === 'edit'}
				<Dialog.Title>Edit Foto</Dialog.Title>
			{/if}
		</Dialog.Header>

		{#if activeModal === 'edit'}
			<div class="grid gap-6 py-4">
				<div>
					<Label for="judul">Judul</Label>
					<Input id="judul" bind:value={formTitle} placeholder={activeModal === 'edit' ? selectedPhoto?.title : 'Masukkan judul foto'} class={activeModal === 'edit' ? 'placeholder:opacity-50' : ''} />
				</div>
				<div>
					<Label>Ubah Foto</Label>
					<div class="mt-2 flex items-center gap-4">
						{#if activeModal === 'edit'}
							<img src={selectedPhoto?.imageSrc} alt="Current" class="h-20 w-20 rounded-md border object-cover" />
						{/if}
						<Label for="file-upload" class="flex h-20 flex-1 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed">
							<Upload class="h-6 w-6 text-muted-foreground" />
							<span class="text-sm text-muted-foreground">Upload File</span>
						</Label>
						<Input id="file-upload" type="file" class="hidden" accept=".jpg, .jpeg, .png" onchange={handleFileChange} />
					</div>
					{#if formFile}
						<p class="mt-2 text-sm text-muted-foreground">File dipilih: {formFile.name}</p>
					{/if}
				</div>
			</div>
			<Dialog.Footer>
				<Button.Root onclick={handleSave}>Simpan</Button.Root>
			</Dialog.Footer>
		{/if}
	</Dialog.Content>
</Dialog.Root>