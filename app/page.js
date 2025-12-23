export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-8 p-6">
      <h1 className="text-5xl font-extrabold text-orange-500">
        Tailwind v3 ✅ Fully Working
      </h1>

      <p className="text-white text-lg max-w-xl text-center">
        This is a test page to confirm Tailwind utilities are working: spacing, flex, colors, hover effects, and rounded corners.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-orange-500 text-black font-bold rounded-xl hover:bg-orange-400 transition">
          Hover Me
        </button>
        <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-300 transition">
          And Me
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="h-24 w-24 bg-red-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">1</div>
        <div className="h-24 w-24 bg-green-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">2</div>
        <div className="h-24 w-24 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">3</div>
      </div>
    </main>
  );
}
