/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hxw9shZQyJw
 */
export default function Component() {
    return (
      <div className="relative min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">UEXAM</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-800 transform transition-transform duration-500 ease-in-out hover:scale-105">
            <BookIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">Literature</h3>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-800 transform transition-transform duration-500 ease-in-out hover:scale-105">
            <MusicIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">Music</h3>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-800 transform transition-transform duration-500 ease-in-out hover:scale-105">
            <FilmIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">Cinema</h3>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-800 transform transition-transform duration-500 ease-in-out hover:scale-105">
            <PaletteIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">Art</h3>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-800 transform transition-transform duration-500 ease-in-out hover:scale-105">
            <GlobeIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">Geography</h3>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-800 transform transition-transform duration-500 ease-in-out hover:scale-105">
            <CalculatorIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">Mathematics</h3>
          </div>
        </div>
        <button className="fixed bottom-4 right-4 w-16 h-16 bg-gray-900 dark:bg-gray-50 rounded-full shadow-lg flex items-center justify-center text-white dark:text-gray-900 text-2xl focus:outline-none">
          <MenuIcon className="w-8 h-8" />
        </button>
      </div>
    )
  }
  
  function BookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }
  
  
  function CalculatorIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <line x1="8" x2="16" y1="6" y2="6" />
        <line x1="16" x2="16" y1="14" y2="18" />
        <path d="M16 10h.01" />
        <path d="M12 10h.01" />
        <path d="M8 10h.01" />
        <path d="M12 14h.01" />
        <path d="M8 14h.01" />
        <path d="M12 18h.01" />
        <path d="M8 18h.01" />
      </svg>
    )
  }
  
  
  function FilmIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18" />
        <path d="M3 7.5h4" />
        <path d="M3 12h18" />
        <path d="M3 16.5h4" />
        <path d="M17 3v18" />
        <path d="M17 7.5h4" />
        <path d="M17 16.5h4" />
      </svg>
    )
  }
  
  
  function GlobeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  }
  
  
  function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
  
  function MusicIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    )
  }
  
  
  function PaletteIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" />
        <circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    )
  }

  
