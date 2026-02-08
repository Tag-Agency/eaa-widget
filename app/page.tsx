'use client';

import AccessibilityWidget from '../components/AccessibilityWidget';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="bg-white py-24 text-center border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-6">
            Novità: EAA 2025 Compliant
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Accessibilità Web <br />
            <span className="text-indigo-600">Semplice e Veloce</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-8">
            Il widget Axs Pro rende il tuo sito conforme al European Accessibility Act con una singola riga di codice. Gratuito e Open Source.
          </p>
          <div className="mt-8">
            <a 
              href="#install" 
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Inizia Subito
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Caratteristiche Principali</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conformità EAA</h3>
              <p className="text-gray-600">Progettato seguendo le direttive del European Accessibility Act per garantire l'accesso a tutti gli utenti.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Navigazione Tastiera</h3>
              <p className="text-gray-600">Supporto completo per la navigazione tramite tastiera. Usa la scorciatoia <strong>Ctrl+U</strong> per un accesso immediato.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design Personalizzabile</h3>
              <p className="text-gray-600">Adatta il colore e la posizione del widget per integrarlo perfettamente con il design del tuo brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Installazione Rapida</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Copia e incolla questo codice prima della chiusura del tag <code className="bg-gray-200 px-2 py-1 rounded text-sm">&lt;/body&gt;</code> del tuo sito.
          </p>
          
          <div className="bg-slate-800 text-slate-200 p-6 rounded-xl overflow-x-auto shadow-lg relative mb-12">
            <span className="absolute top-3 right-3 text-xs text-slate-400 uppercase tracking-wider">HTML</span>
            <pre className="font-mono text-sm leading-relaxed">
              {`<script 
  src="https://cdn.jsdelivr.net/gh/Tag-Agency/eaa-widget@071931d73195cc1f526b6daef501dbbab4b77d0a/axs-widget.js" 
  data-auto-init="true"
></script>`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Configurazione Avanzata</h3>
          <p className="text-center text-gray-600 mb-8">
            Puoi personalizzare il widget aggiungendo parametri all'URL dello script.
          </p>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 font-semibold text-gray-700">Parametro</th>
                    <th className="p-4 font-semibold text-gray-700">Descrizione</th>
                    <th className="p-4 font-semibold text-gray-700">Default</th>
                    <th className="p-4 font-semibold text-gray-700">Esempio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-mono text-sm text-indigo-600">color</td>
                    <td className="p-4 text-gray-600">Colore primario (esadecimale senza #)</td>
                    <td className="p-4 text-gray-500 font-mono text-sm">c4ac44</td>
                    <td className="p-4 text-gray-500 font-mono text-sm">color=ff4081</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm text-indigo-600">position</td>
                    <td className="p-4 text-gray-600">Posizione widget (left o right)</td>
                    <td className="p-4 text-gray-500 font-mono text-sm">right</td>
                    <td className="p-4 text-gray-500 font-mono text-sm">position=left</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Esempio Completo</h3>
            <div className="bg-slate-800 text-slate-200 p-6 rounded-xl overflow-x-auto shadow-lg">
              <pre className="font-mono text-sm leading-relaxed">
                {`<script 
  src="https://cdn.jsdelivr.net/gh/Tag-Agency/eaa-widget@071931d73195cc1f526b6daef501dbbab4b77d0a/axs-widget.js?color=ff4081&position=left" 
  data-auto-init="true"
></script>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Test Area */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Area di Test Accessibilità</h2>
          <p className="text-gray-600 mb-6">
            Questa pagina include il widget attivo (renderizzato come componente React per questa anteprima). 
            Provalo subito cliccando sull'icona in basso a destra.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
              Bottone Standard
            </button>
            <a href="#" className="text-indigo-600 underline hover:text-indigo-800">
              Link di esempio
            </a>
            <div className="text-xs text-gray-400">
              Testo piccolo e poco contrastato (prova il filtro Contrasto o Testo Grande)
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-10 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; 2026 Axs Pro Widget. Open Source Software.</p>
          <p className="mt-2">
            Rilasciato sotto licenza MIT. Contribuisci su <a href="https://github.com/Tag-Agency/eaa-widget" className="text-indigo-600 hover:underline">GitHub</a>.
          </p>
        </div>
      </footer>

      {/* Widget Instance (React Component for Dev/Preview) */}
      <AccessibilityWidget primaryColor="#c4ac44" position="right" />
    </main>
  );
}
