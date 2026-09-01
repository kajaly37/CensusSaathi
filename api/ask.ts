import type { IncomingMessage, ServerResponse } from 'http';
import { handleAssistantApi } from '../server/apiHandler.ts';

/**
 * Serverless Route Handler for /api/ask
 * Compatible with Vercel / Netlify / Node hosting environments
 */
export default async function handler(req: IncomingMessage, res: ServerResponse) {
  return handleAssistantApi(req, res);
}
