"use client";

import React from 'react';
import AccessibilityWidget from '../components/AccessibilityWidget';

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Demo Page Content */}
            <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
                <h1 className="text-xl font-black tracking-tighter text-blue-600">COMPANY<span className="text-gray-900">NAME</span></h1>
                <div className="flex gap-6 text-sm font-semibold text-gray-600">
                    <a href="#" className="hover:text-blue-600 transition-colors">Servizi</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Blog</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Contatti</a>
                </div>
            </nav>

            <header className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h2 className="text-5xl font-extrabold mb-6 leading-tight">Design Inclusivo per un Web Senza Barriere</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Questo è un esempio di sito web che implementa il widget di accessibilità AXS Pro.
                    Usa il bottone in basso a destra per testare tutte le funzionalità.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">Inizia Ora</button>
                    <button className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all">Saperne di più</button>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                        <img src={`https://picsum.photos/seed/${i + 10}/600/400`} alt={`Immagine demo ${i}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="p-6">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">Novità</span>
                            <h3 className="text-xl font-bold mb-3">Articolo di Esempio #{i}</h3>
                            <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                                Le nuove normative EAA (European Accessibility Act) richiedono che tutti i siti web siano accessibili entro il 2025.
                            </p>
                            <a href="#" className="text-blue-600 font-bold text-sm inline-flex items-center group">
                                Leggi tutto
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </a>
                        </div>
                    </article>
                ))}
            </main>

            <section className="bg-gray-900 text-white py-20 mt-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Pronto ad adeguare il tuo sito?</h2>
                    <p className="text-gray-400 mb-8">Non aspettare le scadenze legali, rendi il tuo business accessibile a tutti già oggi.</p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Il tuo indirizzo email" className="bg-gray-800 border-none px-6 py-3 rounded-lg flex-1 focus:ring-2 focus:ring-blue-500" />
                        <button className="bg-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">Invia</button>
                    </form>
                </div>
            </section>

            <footer className="py-12 border-t border-gray-200 text-center text-gray-400 text-sm">
                &copy; 2024 AXS Pro Accessibility Solutions. Tutti i diritti riservati.
            </footer>

            {/* The Widget */}
            <AccessibilityWidget />
        </div>
    );
}
