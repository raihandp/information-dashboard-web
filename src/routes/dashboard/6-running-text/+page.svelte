<script lang="ts">
	import * as Button from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { SquarePen } from "@lucide/svelte";

    import * as Table from '$lib/components/ui/table/index.js';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Eye, Trash2, Plus, Upload } from "@lucide/svelte";

    // --- 1. STATE MANAGEMENT ---
	// Di aplikasi nyata, data ini akan datang dari database/API.
	// Untuk contoh ini, kita gunakan array biasa.
	let photos = [
		{ id: 1, title: 'Teks 1', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+1' },
		{ id: 2, title: 'Teks 2', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+2' },
		{ id: 3, title: 'Teks 3', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+3' }
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
				target.value = ''; // Untuk reset input file
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

<div>
    <h2 style="font-size: 24px;">Edit Teks Berjalan</h2>
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
							<Dialog.Root>
								<Dialog.Trigger>
									<Button.Root variant="outline" size="icon" class="bg-green-500 hover:bg-green-600 hover:text-white text-white">
										<SquarePen class="h-4 w-4" />
									</Button.Root>
								</Dialog.Trigger>
								<Dialog.Content class="sm:max-w-[425px]">
									<Dialog.Header>
										<Dialog.Title>Edit Teks</Dialog.Title>
									</Dialog.Header>
									
									<div class="grid gap-4 py-4">
										<div class="grid w-full gap-y-4">
											<div>
												<label for="judul" class="block text-sm font-medium mb-2">Judul :</label>
												<input id="judul" class="w-full border rounded-md p-2" />
											</div>
											<div>
												<label for="teks" class="block text-sm font-medium mb-2">Masukkan Teks :</label>
												<textarea id="teks" class="w-full border rounded-md p-2" rows="4"></textarea>
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
							<AlertDialog.Root>
								<AlertDialog.Trigger>
									<Button.Root variant="destructive" size="icon" class="text-white" >
										<Trash2 class="h-4 w-4" />
									</Button.Root>
								</AlertDialog.Trigger>
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
						</div>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>

	<div class="flex justify-end">
		<Dialog.Root>
			<Dialog.Trigger>
				<Button.Root class="mr-2 bg-[#FF8A00] hover:bg-[#E07B00]" >
					<Plus class="mr-2 h-4 w-4" /> Tambah
				</Button.Root>
			</Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[425px]">
				<Dialog.Header>
					<Dialog.Title>Tambah Foto</Dialog.Title>
				</Dialog.Header>
				
				<div class="grid gap-6 py-4">
					<div>
						<Label for="judul" class="block text-sm font-medium mb-2">Judul :</Label>
						<Input id="judul" bind:value={formTitle} placeholder='Masukkan judul foto' />
					</div>
					<div>
						<Label for="teks" class="block text-sm font-medium mb-2">Masukkan Teks :</Label>
						<textarea id="teks" class="w-full border rounded-md p-2" rows="4"></textarea>
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