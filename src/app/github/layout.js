'use client';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gray-900 text-white py-4 text-center text-xl font-bold">
        GitHub
      </header>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
