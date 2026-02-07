# Axs Pro Accessibility Widget

Widget di accessibilità conforme al European Accessibility Act (EAA), progettato per essere facilmente integrato in qualsiasi sito web.

## Caratteristiche

- **Conforme EAA**: Include strumenti essenziali come contrasto elevato, testo grande, font per dislessia, e altro.
- **Navigazione da Tastiera**: Completamente accessibile e navigabile tramite tastiera (Tab, Invio, Spazio).
- **Screen Reader Friendly**: Supporto completo per ARIA roles e stati (aria-pressed, aria-expanded).
- **Design Moderno**: Interfaccia pulita, responsive e non intrusiva (bottom sheet).
- **Leggero e Veloce**: Bundle unico ottimizzato.

## Installazione

Per aggiungere il widget al tuo sito, inserisci il seguente script prima della chiusura del tag `</body>`:

```html
<script 
  src="https://cdn.jsdelivr.net/gh/Tag-Agency/eaa-widget@071931d73195cc1f526b6daef501dbbab4b77d0a/axs-widget.js" 
  data-auto-init="true"
></script>
```

### Parametri di Configurazione

Puoi personalizzare il widget modificando i parametri nella query string dell'URL dello script:

| Parametro  | Descrizione                                      | Valore Default | Esempio                    |
|------------|--------------------------------------------------|----------------|----------------------------|
| `color`    | Colore primario del widget (esadecimale senza #) | `c4ac44`       | `color=ff0000` (Rosso)     |
| `position` | Posizione del pulsante e del pannello            | `right`        | `position=left`            |

Esempio completo:

```html
<script 
  src="https://cdn.jsdelivr.net/gh/Tag-Agency/eaa-widget@071931d73195cc1f526b6daef501dbbab4b77d0a/axs-widget.js?color=ff4081&position=left" 
  data-auto-init="true"
></script>
```

## Sviluppo Locale

1.  Clona il repository
2.  Installa le dipendenze: `npm install`
3.  Avvia il server di sviluppo: `npm run dev`

## Build per Produzione

Per generare il file `axs-widget.js` aggiornato nella cartella `public/`:

```bash
npm run build:widget
```
