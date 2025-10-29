export default function Error() {
  return (
    <div className="bg-red-50 border-l-4 border-error p-6 rounded-lg max-w-2xl mx-auto">
      <div className="flex items-center">
        <span className="text-2xl mr-3">⚠️</span>
        <div>
          <h3 className="text-lg font-semibold text-error">Error</h3>
          <p className="text-text-secondary mt-1">{error}</p>
        </div>
      </div>
    </div>
  );
}
