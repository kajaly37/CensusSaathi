import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import { handleAssistantApi } from './server/apiHandler.ts';
import { handleAuthApi, handleAdminApi } from './server/authHandler.ts';

function censusSaathiApiPlugin(): Plugin {
  return {
    name: 'census-saathi-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/ask', (req, res) => {
        handleAssistantApi(req, res);
      });
      server.middlewares.use('/api/assistant', (req, res) => {
        handleAssistantApi(req, res);
      });
      server.middlewares.use('/api/auth', (req, res) => {
        handleAuthApi(req, res);
      });
      server.middlewares.use('/api/admin', (req, res) => {
        handleAdminApi(req, res);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/ask', (req, res) => {
        handleAssistantApi(req, res);
      });
      server.middlewares.use('/api/assistant', (req, res) => {
        handleAssistantApi(req, res);
      });
      server.middlewares.use('/api/auth', (req, res) => {
        handleAuthApi(req, res);
      });
      server.middlewares.use('/api/admin', (req, res) => {
        handleAdminApi(req, res);
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), censusSaathiApiPlugin()],
});
