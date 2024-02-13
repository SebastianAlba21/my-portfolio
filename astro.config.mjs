import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	build: {
		rollupOptions: {
			external: ['@/components/sections/Certificates.astro'],
		},
	},
})
