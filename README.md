# Aggiornamento Automatico del README di GitHub

Questo script Google Apps Script aggiorna automaticamente il file `README.md` di un repository GitHub specificato con gli eventi del giorno corrente dal tuo calendario Google.

## Funzionalità

- Estrazione degli eventi giornalieri dal tuo Google Calendar.
- Formattazione del contenuto del README con gli eventi del giorno.
- Aggiornamento del file `README.md` nel repository GitHub specificato.

## Sicurezza

- Le credenziali e gli ID sensibili sono memorizzati in modo sicuro utilizzando le variabili d'ambiente di Google Apps Script.
- Sanificazione delle stringhe per prevenire iniezioni indesiderate nel file `README.md`.

## Configurazione

### Impostazioni dello Script

Per utilizzare questo script, devi configurare alcune proprietà dello script con i tuoi dati specifici:

1. `CALENDAR_ID`: L'ID del tuo Google Calendar da cui estrarre gli eventi.
2. `GITHUB_TOKEN`: Il token di accesso personale di GitHub con le autorizzazioni necessarie per modificare il repository.
3. `GITHUB_USERNAME`: Il tuo nome utente GitHub.
4. `GITHUB_REPO_NAME`: Il nome del repository GitHub in cui desideri aggiornare il `README.md`.

Queste proprietà possono essere impostate tramite la sezione "Proprietà del progetto" > "Proprietà dello script" nell'editor di Google Apps Script.

### Autorizzazioni

Al primo utilizzo, lo script richiederà l'autorizzazione per accedere ai servizi di Google Calendar e Google Drive. Assicurati di concedere le autorizzazioni necessarie per il corretto funzionamento dello script.

## Uso

Una volta configurato, lo script può essere eseguito manualmente dall'editor di Google Apps Script o può essere impostato per essere eseguito automaticamente a intervalli regolari utilizzando i trigger di Google Apps Script.

## Contribuire

Sei libero di forkare, modificare e contribuire a migliorare questo script. Assicurati di seguire le best practice per la sicurezza e la gestione delle credenziali.

## Licenza

Questo script è distribuito sotto la licenza [MIT](https://opensource.org/licenses/MIT). Per ulteriori informazioni, vedere il file `LICENSE`.