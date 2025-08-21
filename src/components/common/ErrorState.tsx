'use client';

export function ErrorState({ message, onRetry }: { message?: string; onRetry?: () => void }) {
  return (
    <div className="space-y-2 p-4 text-red-600">
      <p>Error: {message || 'Something went wrong'}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
        >
          Retry
        </button>
      )}
    </div>
  );
}
