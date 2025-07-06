export default function Projects() {
  return <>
    <div id="projekty" className="bg-slate-900 py-16 px-8">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Wybrane Projekty</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-slate-800 rounded-lg overflow-hidden group">
          <div className="p-6">
            <h3 className="text-xl font-bold text-white">Nazwa Projektu</h3>
            <p className="text-slate-400 mt-2">Krótki opis projektu, jego cel i główne funkcjonalności.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs bg-sky-900/50 text-sky-300 px-2 py-1 rounded-full">React</span>
              <span className="text-xs bg-sky-900/50 text-sky-300 px-2 py-1 rounded-full">Firebase</span>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-sky-400 hover:text-sky-300 font-semibold">Live Demo →</a>
              <a href="#" className="text-slate-400 hover:text-slate-300 font-semibold">GitHub →</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  </>;
}
