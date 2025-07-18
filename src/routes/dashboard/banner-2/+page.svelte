<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Button from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { SquarePen, CircleX } from "@lucide/svelte";
</script>

<style>
    
</style>
<!-- style="background-color: #FF8A00; text-align: center; color: white; padding: 10px" -->
<div>
    <h2 style="font-size: 24px;">Edit Banner 2</h2>
</div>

<div class="p-10 flex flex-col gap-6">
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

    <Card.Root>
        <Card.Content>
            <div>
                <table class="w-full border-collapse">
                    <thead>
                        <tr>
                            <th>Nomor</th>
                            <th>Foto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Judul Foto 1</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Judul Foto 2</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Judul Foto 3</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Judul Foto 4</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Judul Foto 5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Card.Content>
    </Card.Root>
</div>