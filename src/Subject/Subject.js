import './Subject.css';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/twqSzwr2GN1
 */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OejEhxluhdz
 */
export default function Component() {
  return (
    <div key="1" className="relative min-h-screen flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-6xl font-extrabold text-gray-900  mb-4 tracking-wide">UEXAM</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-lg  transform transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none h-[200px] w-[200px]">
          <KIcon className="w-16 h-16 text-gray-500 " />
          <h3 className="mt-2 text-lg font-semibold text-gray-900 ">Korean</h3>
        </button>
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none h-[200px] w-[200px]">
          <CalculatorIcon className="w-16 h-16 text-gray-500 " />
          <h3 className="mt-2 text-lg font-semibold text-gray-900 ">Math</h3>
        </button>
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none h-[200px] w-[200px]">
          <BookIcon className="w-16 h-16 text-gray-500 " />
          <h3 className="mt-2 text-lg font-semibold text-gray-900 ">English</h3>
        </button>
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none h-[200px] w-[200px]">
          <ScrollIcon className="w-16 h-16 text-gray-500 " />
          <h3 className="mt-2 text-lg font-semibold text-gray-900 ">History</h3>
        </button>
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none h-[200px] w-[200px]">
          <FlaskRoundIcon className="w-16 h-16 text-gray-500 " />
          <h3 className="mt-2 text-lg font-semibold text-gray-900 ">Science</h3>
        </button>
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none h-[200px] w-[200px]">
          <GlobeIcon className="w-16 h-16 text-gray-500 " />
          <h3 className="mt-2 text-lg font-semibold text-gray-900 ">Social</h3>
        </button>
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none h-[200px] w-[200px]">
          <LanguagesIcon className="w-16 h-16 text-gray-500 " />
          <h3 className="mt-2 text-lg font-semibold text-gray-900 ">
            2nd
            <br />
            Language{"\n                  "}
          </h3>
        </button>
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-lg  transform transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none h-[200px] w-[200px]">
          <ScrollIcon className="w-16 h-16 text-gray-500 " />
          <h3 className="mt-2 text-lg font-semibold text-gray-900 ">
            Classical
            <br />
            Chinese{"\n                  "}
          </h3>
        </button>
      </div>
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-gray-900 rounded-full shadow-lg flex items-center justify-center text-white text-2xl focus:outline-none">
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


function FlaskRoundIcon(props) {
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
      <path d="M10 2v7.31" />
      <path d="M14 9.3V1.99" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
      <path d="M5.52 16h12.96" />
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


function LanguagesIcon(props) {
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
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
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


function ScrollIcon(props) {
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
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
    </svg>
  )
}


function KIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" x2="12" y1="7" y2="7" />
      <line x1="5" x2="12" y1="20" y2="7" />
      <line x1="16" x2="16" y1="20" y2="5" />
      <line x1="16" x2="20" y1="13" y2="13" />
    </svg>
  )
}
