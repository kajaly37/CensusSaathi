import type { IncomingMessage, ServerResponse } from 'http';
import { handleAssistantApi } from '../server/apiHandler.ts';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  return handleAssistantApi(req, res);
}
