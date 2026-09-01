import type { IncomingMessage, ServerResponse } from 'http';
import { handleAuthApi } from '../server/authHandler.ts';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  return handleAuthApi(req, res);
}
