import { env } from '@/shared/config/env';

function joinUrl(base: string, path = '') {
  const b = base.replace(/\/+$/, '');
  const p = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  return `${b}${p}`;
}

export async function api<T>(path = '', init?: RequestInit): Promise<T> {
  if (!env.apiBaseUrl) {
    throw new Error('Missing NEXT_PUBLIC_API_BASE_URL');
  }

  const url = joinUrl(env.apiBaseUrl, path);

  const res = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}
