<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Button from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { AspectRatio } from "$lib/components/ui/aspect-ratio/index.js";
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from "$lib/components/ui/textarea/index.js";
	import { SquarePen, Image, Upload } from "@lucide/svelte";
</script>

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
							<Button.Root variant="outline" size="icon" aria-label="Edit">
								<SquarePen class="h-4 w-4" />
							</Button.Root>
                        </Dialog.Trigger>
                        <Dialog.Content class="sm:max-w-[425px]">
                            <Dialog.Header>
                                <Dialog.Title>Edit Judul Banner</Dialog.Title>
                            </Dialog.Header>
                            
                            <div class="grid gap-4 py-4">
                                <div class="grid w-full gap-y-4">
                                    <div>
                                        <Label for="judul" class="block text-sm font-medium mb-2">Judul :</Label>
										<Input id="judul" placeholder="Masukkan Judul yang di inginkan" class="w-full border rounded-md p-2" />
                                    </div>
                                    <div>
                                        <Label for="desc" class="block text-sm font-medium mb-2">Deskripsi :</Label>
                                        <Textarea id="desc" class="w-full border rounded-md p-2"></Textarea>
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
											<Label for="file-upload" class="flex h-20 flex-1 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed">
												<Upload class="h-6 w-6 text-muted-foreground"></Upload>
												<span class="text-sm text-muted-foreground">Upload File</span>
											</Label>
											<Input id="file-upload" type="file" class="hidden" accept=".jpg, .jpeg, .png" />
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

				<div class="grid place-items-center">
					<!-- <AspectRatio ratio={8 / 5}> -->
					<Image class="p-6 w-100 h-100" />
					<!-- </AspectRatio> -->
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
											<Label for="judul" class="block text-sm font-medium mb-2">Link Youtube :</Label>
											<Input id="judul" placeholder="Masukkan link youtube video profil fakultas" class="w-full border rounded-md p-2" />
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

				<div class="p-6">
					<AspectRatio ratio={8 / 5}>
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
					</AspectRatio>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>