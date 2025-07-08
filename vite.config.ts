import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use jsdom for React components
    globals: true, // Enable global test functions like describe, it, expect
    setupFiles: './vitest.setup.ts', // Optional setup file
  },
});