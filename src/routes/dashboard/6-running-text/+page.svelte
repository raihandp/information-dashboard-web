<script lang="ts">
	import * as Button from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Table from '$lib/components/ui/table/index.js';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from "$lib/components/ui/textarea/index.js";
	import { SquarePen, Trash2, Plus } from "@lucide/svelte";

	// Di pengembangan selanjutnya, data ini akan datang dari database FIK. Untuk pengembangan UI/UX ini, sementara kami menggunakan array biasa.
	let texts = [
		{ id: 1, title: 'Teks 1', isiTeks: 'Running Text 1' },
		{ id: 2, title: 'Teks 2', isiTeks: 'Running Text 2' },
		{ id: 3, title: 'Teks 3', isiTeks: 'Running Text 3' }
	];

	let activeModal: 'add' | 'edit' | 'delete' | null = null;
	let selectedText: (typeof texts)[0] | null = null;

    let isDialogOpen = false;
    $: isDialogOpen = activeModal === 'add' || activeModal === 'edit';

    let isAlertOpen = false;
    $: isAlertOpen = activeModal === 'delete';

	let formTitle = '';
	let formText = '';

	function openModal(type: typeof activeModal, text: (typeof texts)[0] | null = null) {
		activeModal = type;
		selectedText = text;

		// Reset form state setiap kali modal dibuka
		formTitle = text?.title ?? '';
		formText = text?.isiTeks ?? '';
	}

	function closeModal() {
		activeModal = null;
	}

	function handleSave() {
		if (!formTitle) {
			alert('Judul tidak boleh kosong!');
			return;
		}

		if (activeModal === 'add') {
			if (!formText) {
				alert('Isi teks tidak boleh kosong!');
				return;
			}
			const newId = texts.length > 0 ? Math.max(...texts.map((p) => p.id)) + 1 : 1;
			texts = [
				...texts,
				{ id: newId, title: formTitle, isiTeks: formText }
			];
		}

		if (activeModal === 'edit' && selectedText) {
			if (!formTitle) {
				alert('Judul tidak boleh kosong!');
				return;
			}

			if (!formText) {
				alert('Isi teks tidak boleh kosong!');
				return;
			}

			texts = texts.map((p) =>
				p.id === selectedText!.id ? { ...p, title: formTitle, isiTeks: formText } : p
			);
		}

		closeModal();
	}

	function handleDelete() {
		if (selectedText) {
			texts = texts.filter((p) => p.id !== selectedText!.id);
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
			{#each texts as text, i}
				<Table.Row>
					<Table.Cell>{i + 1}.</Table.Cell>
					<Table.Cell class="font-medium">{text.title}</Table.Cell>
					<Table.Cell class="text-right">
						<div class="flex justify-end gap-2">
							<Button.Root size="icon" class="bg-green-500 text-white hover:bg-green-600 hover:text-white" onclick={() => openModal('edit', text)}>
								<SquarePen class="h-4 w-4" />
							</Button.Root>
							<Button.Root variant="destructive" size="icon" class="hover:bg-red-50 hover:text-red-700" onclick={() => openModal('delete', text)}>
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
				<Dialog.Title>Tambah Teks</Dialog.Title>
			{:else if activeModal === 'edit'}
				<Dialog.Title>Edit Teks</Dialog.Title>
			{/if}
		</Dialog.Header>

		{#if activeModal === 'add' || activeModal === 'edit'}
			<div class="grid gap-6 py-4">
				<div>
					<Label for="judul" class="block text-sm font-medium mb-2">Judul :</Label>
					<Input id="judul" bind:value={formTitle} placeholder={activeModal === 'edit' ? selectedText?.title : 'Masukkan judul Teks Berjalan'} class={activeModal === 'edit' ? 'placeholder:opacity-50' : ''} />
				</div>
				<div>
					<Label for="runningText" class="block text-sm font-medium mb-2">Masukkan Teks :</Label>
					<Textarea id="runningText" bind:value={formText} placeholder={activeModal === 'edit' ? selectedText?.isiTeks : 'Masukkan detil isi teks'} class={activeModal === 'edit' ? 'placeholder:opacity-50' : ''}/>
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
				Apakah anda ingin menghapus teks ini? Aksi ini tidak dapat dibatalkan.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Tidak</AlertDialog.Cancel>
			<AlertDialog.Action onclick={handleDelete} class="bg-red-600 hover:bg-red-700">Ya</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>