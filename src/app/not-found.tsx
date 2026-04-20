import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-[#000048] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[#000048] mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#000048] text-white rounded-lg hover:bg-[#0b60a0] transition-colors duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
