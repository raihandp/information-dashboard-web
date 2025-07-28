<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Button from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { SquarePen, CircleX } from "@lucide/svelte";

    import * as Table from '$lib/components/ui/table/index.js';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Eye, Trash2, Plus, Upload } from "@lucide/svelte";

    // --- 1. STATE MANAGEMENT ---
	// Di aplikasi nyata, data ini akan datang dari database/API.
	// Untuk contoh ini, kita gunakan array biasa.
	let photos = [
		{ id: 1, title: 'ReadZone', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+1' },
		{ id: 2, title: 'Kalender Akademik', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+2' },
		{ id: 3, title: 'POB FIK UPNVJ', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+3' },
		{ id: 4, title: 'Statistik FIK UPNVJ', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+4' }
	];

	// State untuk mengontrol modal mana yang aktif
	let activeModal: 'add' | 'edit' | 'view' | 'delete' | null = null;
	let selectedPhoto: (typeof photos)[0] | null = null;

    // Variabel untuk Dialog utama
    let isDialogOpen = false;
    $: isDialogOpen = activeModal === 'add' || activeModal === 'edit' || activeModal === 'view';

    // Variabel untuk Alert Dialog Delete
    let isAlertOpen = false;
    $: isAlertOpen = activeModal === 'delete';

	// State untuk form tambah/edit
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

	// --- 3. FUNGSI CRUD (CREATE, UPDATE, DELETE) ---
	function handleSave() {
		if (!formTitle) {
			alert('Judul tidak boleh kosong!');
			return;
		}

		if (activeModal === 'add') {
			if (!formFile) {
				alert('Silakan unggah foto!');
				return;
			}
			const newId = photos.length > 0 ? Math.max(...photos.map((p) => p.id)) + 1 : 1;
			photos = [
				...photos,
				{ id: newId, title: formTitle, imageSrc: formFilePreview }
			];
		}

		if (activeModal === 'edit' && selectedPhoto) {
			photos = photos.map((p) =>
				p.id === selectedPhoto!.id ? { ...p, title: formTitle, imageSrc: formFilePreview } : p
			);
		}

		closeModal();
	}

	function handleDelete() {
		if (selectedPhoto) {
			photos = photos.filter((p) => p.id !== selectedPhoto!.id);
		}
		closeModal();
	}
</script>

<style>
    
</style>
<!-- style="background-color: #FF8A00; text-align: center; color: white; padding: 10px" -->
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
                                    {#snippet child({ props })}
                                        <Button.Root {...props} type="submit">Simpan</Button.Root>
                                    {/snippet}
                                </Dialog.Close>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Root>
                </div>
            </div>
        </Card.Content>
    </Card.Root>

    <!-- <div class="p-4 sm:p-6 md:p-10"></div> -->
    <Table.Root class="mt-6">
		<!-- <Table.Header class="bg-[#FF8A00]">
			<Table.Row class="text-center">
				<Table.Head class="w-[50px] text-white">No.</Table.Head>
				<Table.Head class="text-white">Foto</Table.Head>
				<Table.Head class="w-[150px] text-right text-white">Aksi</Table.Head>
			</Table.Row>
		</Table.Header> -->
		<Table.Body>
			{#each photos as photo, i}
				<Table.Row>
					<Table.Cell>{i + 1}.</Table.Cell>
					<Table.Cell class="font-medium">{photo.title}</Table.Cell>
					<Table.Cell class="text-right">
						<div class="flex justify-end gap-2">
							<Button.Root variant="outline" size="icon" class="bg-green-500 hover:bg-green-600 text-white" onclick={() => openModal('edit', photo)}>
								<SquarePen class="h-4 w-4" />
							</Button.Root>
							<Button.Root variant="destructive" size="icon" onclick={() => openModal('delete', photo)}>
								<Trash2 class="h-4 w-4" />
							</Button.Root>
						</div>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>

	<div class="flex justify-end">
		<Button.Root class="mr-2 bg-[#FF8A00] hover:bg-[#E07B00]" onclick={() => openModal('add')}>
			<Plus class="mr-2 h-4 w-4" /> Tambah
		</Button.Root>
	</div>
</div>


<Dialog.Root bind:open={isDialogOpen} onOpenChange={(open) => !open && closeModal()}>
	<Dialog.Content>
		<Dialog.Header>
			{#if activeModal === 'add'}
				<Dialog.Title>Tambah Foto</Dialog.Title>
			{:else if activeModal === 'edit'}
				<Dialog.Title>Edit Foto</Dialog.Title>
			{:else if activeModal === 'view'}
				<Dialog.Title>{selectedPhoto?.title}</Dialog.Title>
			{/if}
		</Dialog.Header>

		{#if activeModal === 'view'}
			<img src={selectedPhoto?.imageSrc} alt={selectedPhoto?.title} class="mt-4 w-full rounded-md" />
			<Dialog.Footer>
				<Button.Root variant="outline" onclick={closeModal}>Tutup</Button.Root>
			</Dialog.Footer>
		{/if}

		{#if activeModal === 'add' || activeModal === 'edit'}
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

<AlertDialog.Root bind:open={isAlertOpen} onOpenChange={(open) => !open && closeModal()}>	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Hapus</AlertDialog.Title>
			<AlertDialog.Description>
				Apakah anda ingin menghapus foto ini? Aksi ini tidak dapat dibatalkan.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Tidak</AlertDialog.Cancel>
			<AlertDialog.Action onclick={handleDelete} class="bg-red-600 hover:bg-red-700">Ya</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>