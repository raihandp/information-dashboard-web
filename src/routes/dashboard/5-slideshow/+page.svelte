<script lang="ts">
	import * as Button from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Table from '$lib/components/ui/table/index.js';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { AspectRatio } from "$lib/components/ui/aspect-ratio/index.js";
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { SquarePen, Eye, Trash2, Plus, Upload } from "@lucide/svelte";

	// Di pengembangan selanjutnya, data ini akan datang dari database FIK. 
	// Untuk pengembangan UI/UX ini, sementara kami menggunakan array biasa.
	let photos = [
		{ id: 1, title: 'banner-Layanan-Gratis', imageSrc: 'https://new-fik.upnvj.ac.id/wp-content/uploads/2023/01/banner-Layanan-Gratis-1.jpg' },
		{ id: 2, title: 'banner-Kerja-Prima-Tanpa-Benturan-Kepentingan', imageSrc: 'https://new-fik.upnvj.ac.id/wp-content/uploads/2023/06/banner-Kerja-Prima-Tanpa-Benturan-Kepentingan-2.jpg' },
		{ id: 3, title: 'banner-WBS', imageSrc: 'https://new-fik.upnvj.ac.id/wp-content/uploads/2023/01/banner-WBS.jpg' }
	];

	let activeModal: 'add' | 'edit' | 'view' | 'delete' | null = null;
	let selectedPhoto: (typeof photos)[0] | null = null;

    let isDialogOpen = false;
    $: isDialogOpen = activeModal === 'add' || activeModal === 'edit' || activeModal === 'view';

    let isAlertOpen = false;
    $: isAlertOpen = activeModal === 'delete';

	let formTitle = '';
	let formFile: File | null = null;
	let formFilePreview = '';

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
			if (!formTitle) {
				alert('Judul tidak boleh kosong!');
				return;
			}

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

<div>
    <h2 style="font-size: 24px;">Edit Slideshow</h2>
</div>

<div class="p-10 flex flex-col gap-6">
    <Table.Root>
		<Table.Body>
			{#each photos as photo, i}
				<Table.Row>
					<Table.Cell>{i + 1}.</Table.Cell>
					<Table.Cell class="font-medium">{photo.title}</Table.Cell>
					<Table.Cell class="text-right">
						<div class="flex justify-end gap-2">
							<Button.Root variant="outline" size="icon" onclick={() => openModal('view', photo)}>
								<Eye class="h-4 w-4" />
							</Button.Root>
							<Button.Root variant="outline" size="icon" class="bg-green-500 text-white hover:bg-green-600 hover:text-white" onclick={() => openModal('edit', photo)}>
								<SquarePen class="h-4 w-4" />
							</Button.Root>
							<Button.Root variant="destructive" size="icon" class="hover:bg-red-50 hover:text-red-700" onclick={() => openModal('delete', photo)}>
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
			<AspectRatio ratio={8 / 5}>
				<img src={selectedPhoto?.imageSrc} alt={selectedPhoto?.title} class="mt-4 w-full rounded-md" />
			</AspectRatio>
			<Dialog.Footer>
				<Button.Root variant="outline" onclick={closeModal}>Tutup</Button.Root>
			</Dialog.Footer>
		{/if}

		{#if activeModal === 'add' || activeModal === 'edit'}
			<div class="grid gap-6 py-4">
				<div>
					<Label for="judul" class="block text-sm font-medium mb-2">Judul :</Label>
					<Input id="judul" bind:value={formTitle} placeholder={activeModal === 'edit' ? selectedPhoto?.title : 'Masukkan judul foto'} class={activeModal === 'edit' ? 'placeholder:opacity-50' : ''} />
				</div>
				<div>
					<Label for="editFoto" class="block text-sm font-medium mb-2">Ubah Foto :</Label>
					<div class="mt-2 flex items-center gap-4">
						{#if activeModal === 'edit'}
							<img src={selectedPhoto?.imageSrc} alt={selectedPhoto?.title} class="h-20 w-20 rounded-md border object-cover" />
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

<AlertDialog.Root bind:open={isAlertOpen} onOpenChange={(open) => !open && closeModal()}>
	<AlertDialog.Content>
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