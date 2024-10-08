const FloatingUpButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-16 right-12 rounded-full bg-gray-800 p-3 text-white hover:text-blue-400`}
      onClick={handleClick}
    >
      <svg
        className={`h-6 w-6 md:h-10 md:w-10`}
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default FloatingUpButton;
