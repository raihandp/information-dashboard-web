<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Button from "$lib/components/ui/button/index.js";
	import { SquarePen, CircleX } from "@lucide/svelte";

    // function openModal() {
    //     document.getElementById('tambahModal').classList.add('show');
    //     document.body.style.overflow = 'hidden';
    // }

    // function closeModal() {
    //     document.getElementById('tambahModal').classList.remove('show');
    //     document.body.style.overflow = 'auto';
    //     document.getElementById('tambahForm').reset();
    // }

    // document.getElementById('tambahModal').addEventListener('click', function(e) {
    //     if (e.target === this) {
    //         closeModal();
    //     }
    // });

    // document.addEventListener('keydown', function(e) {
    //     if (e.key === 'Escape') {
    //         closeModal();
    //     }
    // });
</script>

<div style="width: 70vw; background-color: #FF8A00; text-align: center; color: white; padding: 10px">
    <h2 style="font-size: 24px;">Edit Banner 2</h2>
</div>
<div class="content" style="width: 100%; margin:20px;">
    <Card.Root>
        <Card.Content class="p-6">
            <div class="flex items-center justify-between space-x-4">
                <div class="flex-grow">
                    <h3 class="font-semibold tracking-tight">Judul</h3>
                    <p class="text-sm text-muted-foreground">Deskripsi</p>
                </div>
                <div>
                    <Button.Root variant="outline" size="icon" aria-label="Edit">
                        <SquarePen class="h-4 w-4" />
                    </Button.Root>
                </div>
            </div>
        </Card.Content>
    </Card.Root>

    <Card.Root>
        <Card.Content class="p-6">
            <div class="flex items-center justify-between space-x-4 h-50">
            </div>
        </Card.Content>
    </Card.Root>
</div>

<!-- Tambah Modal -->
<div id="tambahModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <div class="modal-title">
                Edit
            </div>
            <!-- <button class="close" onclick="closeModal()">×</button> -->
        </div>

    <form>
        <div class="form-group">
            <label for="pin_lama">PIN Lama</label>
            <input type="password"
            id="pin_lama"
            name="pin_lama"
            maxlength="6"
            pattern="[0-9]{6}"
            title="PIN harus 6 digit angka"
            required>
        </div>

        <div class="form-group">
            <label for="pin">PIN Baru</label>
            <input type="password"
            id="pin"
            name="pin"
            maxlength="6"
            pattern="[0-9]{6}"
            title="PIN harus 6 digit angka"
            required>
        </div>

        <div class="form-group">
            <label for="pin_confirmation">Konfirmasi PIN Baru</label>
            <input type="password"
            id="pin_confirmation"
            name="pin_confirmation"
            maxlength="6"
            pattern="[0-9]{6}"
            title="PIN harus 6 digit angka"
            required>
        </div>

        <button type="submit">Simpan</button>
    </form>
    </div>
</div>

<!-- <style>
    Card.Root
</style> -->