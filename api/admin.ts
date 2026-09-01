import type { IncomingMessage, ServerResponse } from 'http';
import { handleAdminApi } from '../server/authHandler.ts';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  return handleAdminApi(req, res);
}
