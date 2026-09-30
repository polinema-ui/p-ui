<script lang="ts">
	import { Search01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Input } from "$lib/components/input";

	let query = $state("");

	const components = [
		{
			name: "Avatar",
			href: "/docs/components/avatar",
			description: "Elemen visual foto profil dengan fallback inisial dan ikon.",
		},
		{
			name: "Breadcrumb",
			href: "/docs/components/breadcrumb",
			description: "Navigasi hirarki halaman dengan pemisah kustom dan ellipsis.",
		},
		{
			name: "Button",
			href: "/docs/components/button",
			description: "Tombol untuk aksi apa pun — variant, size, dan state lengkap.",
		},
		{
			name: "Card",
			href: "/docs/components/card",
			description: "Koleksi kartu: job, login, image, dan scheduled reports.",
		},
		{
			name: "Carousel",
			href: "/docs/components/carousel",
			description: "Slider & swipe interaktif berbasis Embla Carousel.",
		},
		{
			name: "Dialog",
			href: "/docs/components/dialog",
			description: "Modal accessible berbasis Bits UI & Radix — 15+ varian.",
		},
		{
			name: "Input",
			href: "/docs/components/input",
			description: "Field input teks dengan label, hint, dan state invalid.",
		},
		{
			name: "Spinner",
			href: "/docs/components/spinner",
			description: "Indikator loading berputar dengan pilihan ukuran.",
		},
		{
			name: "Textarea",
			href: "/docs/components/textarea",
			description: "Area input multi-baris dengan limit, actions, dan validasi.",
		},
	] as const;

	const filtered = $derived(
		components.filter(
			(c) =>
				c.name.toLowerCase().includes(query.toLowerCase()) ||
				c.description.toLowerCase().includes(query.toLowerCase()),
		),
	);
</script>

<div class="not-prose my-6 flex items-center gap-3">
	<div class="relative w-full max-w-sm">
		<HugeiconsIcon
			icon={Search01Icon}
			size={16}
			class="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
		/>
		<Input bind:value={query} placeholder="Cari komponen..." class="h-9 rounded-xl bg-neutral-50 pl-9 dark:bg-white/5" />
	</div>
</div>

<div class="not-prose grid grid-cols-1 gap-1 sm:grid-cols-2">
	{#each filtered as c (c.name)}
		<a
			href={c.href}
			class="group flex flex-col gap-1 rounded-xl px-4 py-4 transition-colors hover:bg-neutral-100 active:bg-neutral-100 dark:hover:bg-white/[0.06] dark:active:bg-white/[0.08]"
		>
			<span class="text-sm font-semibold text-neutral-900 dark:text-white">{c.name}</span>
			<span class="line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
				{c.description}
			</span>
		</a>
	{:else}
		<div
			class="col-span-full rounded-xl border border-dashed border-neutral-200 bg-neutral-50 px-6 py-10 text-center text-sm text-neutral-500 dark:border-white/10 dark:bg-white/[0.02] dark:text-neutral-400"
		>
			Nggak ada komponen yang cocok dengan "{query}".
		</div>
	{/each}
</div>
