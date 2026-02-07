'use client';

import AccessibilityWidget from '../components/AccessibilityWidget';

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">EAA Widget Preview</h1>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Area</h2>
          <p className="mb-4 text-gray-600">
            Questa pagina serve per testare il componente React <code>AccessibilityWidget</code> in ambiente di sviluppo (con Hot Reloading).
          </p>
          <p className="mb-4 text-gray-600">
            Per testare la versione compilata (JS standalone), apri <a href="/demo.html" className="text-blue-600 underline hover:text-blue-800">/demo.html</a> dopo aver avviato il server.
          </p>
          
          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Button A
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Button B
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold mb-2">Istruzioni</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Il widget è renderizzato qui sotto.</li>
            <li>Modifica <code>components/AccessibilityWidget.tsx</code> per vedere i cambiamenti in tempo reale.</li>
          </ul>
        </div>
      </div>
      
      {/* Widget Instance 1: Default Right */}
      <AccessibilityWidget primaryColor="#3f51b5" position="right" />
    </main>
  );
}
