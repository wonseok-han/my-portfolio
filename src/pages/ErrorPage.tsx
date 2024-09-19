interface ErrorPageProps {
  onClick?: () => void;
}

const ErrorPage = ({ onClick }: ErrorPageProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-4xl font-extrabold text-gray-900">
          Page Error
        </div>
        <hr className="mt-2 h-1 bg-gray-700" />
        <div className="mt-4 flex flex-col justify-center gap-2 space-y-4 align-middle text-gray-900">
          <p>A failure has occurred. please try again.</p>
          <button
            className="rounded-md bg-gray-700 p-3 font-bold text-white"
            onClick={() => {
              onClick?.();
              window.location.reload();
            }}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
