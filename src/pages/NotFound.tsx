const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-4xl font-extrabold">404 - Page Not Found</div>
        <hr className="mt-2 h-1 bg-gray-700" />
        <div className="mt-4 space-y-4">
          <p>The page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
