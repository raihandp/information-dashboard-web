<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Button from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { SquarePen, CircleX } from "@lucide/svelte";
</script>
<!-- style="background-color: #FF8A00; text-align: center; color: white; padding: 10px" -->
<div class="w-svh" >
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
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button.Root variant="outline" size="icon" aria-label="Edit">
                                <SquarePen class="h-4 w-4" />
                            </Button.Root>
                        </Dialog.Trigger>
                        <Dialog.Content class="sm:max-w-[425px]">
                            <Dialog.Header>
                                <Dialog.Title>Edit</Dialog.Title>
                            </Dialog.Header>
                            
                            <div class="grid gap-4 py-4">
                                <div class="grid grid-cols-4 items-center gap-4">
                                    <label for="judul" class="text-right">Judul</label>
                                    <input id="judul" class="col-span-3" style="border: 1px solid; border-radius:5px;" />

                                    <label for="desc" class="text-right">Deskripsi</label>
                                    <input id="desc" class="col-span-3" style="border: 1px solid; border-radius:5px;" />
                                </div>
                            </div>

                            <Dialog.Footer>
                                <Button.Root type="submit">Simpan</Button.Root>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Root>
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