'use client';

import { Button } from '../ui/button';

export function ErrorState({ message, onRetry }: { message?: string; onRetry?: () => void }) {
  return (
    <div className="space-y-2 p-4 text-red-600">
      <p>Error: {message || 'Something went wrong'}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="destructive">
          Retry
        </Button>
      )}
    </div>
  );
}
