<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Button from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { SquarePen, CircleX, Image } from "@lucide/svelte";

    import * as Table from '$lib/components/ui/table/index.js';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Eye, Trash2, Plus, Upload } from "@lucide/svelte";

    // --- 1. STATE MANAGEMENT ---
	// Di aplikasi nyata, data ini akan datang dari database/API.
	// Untuk contoh ini, kita gunakan array biasa.
	let photos = [
		{ id: 1, title: 'Nama Foto', imageSrc: 'https://via.placeholder.com/400x200?text=Foto+1' },
	];

	// State untuk mengontrol modal mana yang aktif
	let activeModal: 'edit' | 'view' | 'delete' | null = null;
	let selectedPhoto: (typeof photos)[0] | null = null;

    // Variabel untuk Dialog utama
    let isDialogOpen = false;
    $: isDialogOpen = activeModal === 'edit' || activeModal === 'view';

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
    <h2 style="font-size: 24px;">Edit Banner 1</h2>
</div>

<div class="p-10 flex flex-col gap-6">
    <Card.Root>
        <Card.Content class="p-6">
            <div class="flex items-center justify-between space-x-4">
                <div class="flex-grow">
                    <h3 class="font-semibold tracking-tight">Video Informasi FIK</h3>
                    <p class="text-sm text-muted-foreground">Lihat informasi terkait FIK UPNVJ</p>
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
                                <Dialog.Title>Edit Judul Banner</Dialog.Title>
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

	<div class="grid grid-cols-2 gap-6">
		<Card.Root>
			<Card.Content class="p-6">
				<div class="flex items-center justify-between space-x-4">
					<div class="flex-grow">
						<h3 class="font-semibold tracking-tight">Visi dan Misi FIK</h3>
						<p class="text-sm text-muted-foreground">Kelola visi dan misi FIK UPNVJ</p>
					</div>
					<div>
						<Dialog.Root>
							<Dialog.Trigger>
								<Button.Root variant="outline" size="icon">
									<SquarePen class="h-4 w-4" />
								</Button.Root>
							</Dialog.Trigger>
							<Dialog.Content class="sm:max-w-[425px]">
								<Dialog.Header>
									<Dialog.Title>Edit Poster</Dialog.Title>
								</Dialog.Header>
								
								<div class="grid gap-4 py-4">
									<div class="grid w-full gap-y-4">
										<div>
											<label for="desc" class="block text-sm font-medium mb-2">Upload Poster :</label>
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

				<div class="grid place-items-center">
					<Image class="p-6 w-100 h-100" />
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Content class="p-6">
				<div class="flex items-center justify-between space-x-4">
					<div class="flex-grow">
						<h3 class="font-semibold tracking-tight">Company Profile FIK</h3>
						<p class="text-sm text-muted-foreground">Kelola video company profile FIK UPNVJ</p>
					</div>
					<div>
						<Dialog.Root>
							<Dialog.Trigger>
								<Button.Root variant="outline" size="icon">
									<SquarePen class="h-4 w-4" />
								</Button.Root>
							</Dialog.Trigger>
							<Dialog.Content class="sm:max-w-[425px]">
								<Dialog.Header>
									<Dialog.Title>Edit Video</Dialog.Title>
								</Dialog.Header>
								
								<div class="grid gap-4 py-4">
									<div class="grid w-full gap-y-4">
										<div>
											<label for="judul" class="block text-sm font-medium mb-2">Link Youtube :</label>
											<input id="judul" placeholder="Masukkan link youtube video profil fakultas" class="w-full border rounded-md p-2" />
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

				<div class="p-6">
					<iframe 
						width=100%
						height=100%
						src="https://www.youtube.com/embed/eaLfH6a4BWE?autoplay=1&loop=1&mute=1&controls=0si=UiuqwkRtdghH000i" 
						title="Video Profil FIK UPNVJ"
						frameborder="0" 
						allow= "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
					</iframe>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>