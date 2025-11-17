export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">PipelineX Frontend</h1>
        <p className="text-lg mb-6">
          Minimal Next.js + Tailwind setup to test the frontend environment.
        </p>
        <a
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          href="#"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
