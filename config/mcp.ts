import { defineConfig } from '@jrmc/adonis-mcp'

export default defineConfig({
  name: 'adonis-mcp-docs',
  version: '1.0.0',
  completions: true,
  // cache: {
  //   discover: { ttlMs: 60_000, scope: 'public' },
  //   tools: { ttlMs: 60_000, scope: 'private' },
  //   resources: { ttlMs: 30_000, scope: 'private' },
  //   resourceTemplates: { ttlMs: 60_000, scope: 'private' },
  //   prompts: { ttlMs: 60_000, scope: 'private' },
  // },
})
