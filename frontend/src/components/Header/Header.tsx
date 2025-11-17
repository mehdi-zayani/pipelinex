// frontend/src/components/Header/Header.tsx
// Professional header for PipelineX dashboard (light theme)

export default function Header() {
  return (
    <header className="w-full bg-white text-gray-900 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        {/* Project Title */}
        <h1 className="text-2xl font-bold uppercase">PipelineX Frontend</h1>

        {/* Subtitle / tagline */}
        <p className="text-gray-500 text-sm uppercase">Full-Stack template ready for production</p>
      </div>
    </header>
  );
}
