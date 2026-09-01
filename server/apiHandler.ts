import type { IncomingMessage, ServerResponse } from 'http';
import { processGenAiAssistantQuery } from './genAiService.ts';
import type { GenAiRequest } from './genAiService.ts';

/**
 * Handle incoming /api/assistant requests across Node HTTP / Vite Dev Server / Connect
 */
export async function handleAssistantApi(req: IncomingMessage, res: ServerResponse): Promise<void> {
  // Set CORS headers for local development if needed
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method not allowed. Use POST.' }));
    return;
  }

  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
    // 1MB safety cap
    if (body.length > 1e6) {
      req.destroy();
    }
  });

  req.on('end', async () => {
    try {
      const parsed: GenAiRequest = JSON.parse(body || '{}');

      if (!parsed.message || typeof parsed.message !== 'string') {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid request: "message" field is required.' }));
        return;
      }

      const result = await processGenAiAssistantQuery(parsed);
      res.statusCode = 200;
      res.end(JSON.stringify(result));
    } catch (err: unknown) {
      console.error('API Handler Error:', err);
      res.statusCode = 500;
      res.end(JSON.stringify({ 
        error: 'An internal server error occurred while processing the request.',
        fallbackNotice: 'Please verify with the official Census portal at https://censusindia.gov.in/'
      }));
    }
  });
}
