# COME COLLABORARE CON GIT

## PRIMA VOLTA:

- Se non ancora fatto, clonare il progetto

```bash
git clone https://github.com/simoneedge/cb8-gruppo-b.git
```

## OGNI VOLTA:

1. Assicurarsi di essere nella cartella del progetto **cb8-gruppo-b**
2. Assicurarsi di essere sul branch **main**
3. Lanciare da terminale il seguente comando per essere allineati localmente alla ultime modifiche su GitHub

```bash
git pull
```

4. Creare un nuovo branch che abbia un titolo descrittivo e (se vi va) una struttura di questo genere:

   **parolachiave/titoloDescrittivoInCamelCase-cognome-data(yymmdd)**

   Esempio, devo aggiungere una navbar: **feat/addNavbar-spoto-240402**

Le parole chiavi importanti sono 3:

- feat: aggiunta di una nuova feature
- style: modifica di stile
- fix: risoluzione di un bug
- chore: modifica "d'ambiente", o comunque una modifica che non rientra nelle prime due

5. Una volta modificati uno o più file, aggiungere le modifiche all'area di stage con il seguente comando:

```bash
  git add .
```

per aggiungere tutte le modifiche, oppure

```bash
 git add nomeFile
```

per aggiungere un file specifico

6. Committare le modifiche con il seguente comando:

```bash
   git commit -m "messaggio del commit"
```

anche per il messaggio del commit sarebbe figo seguire una struttura del genere:

**parolachiave: messaggio del commit in inglese**
Esempio: ho aggiunto una navbar -> **feat: add navbar**
oppure ho risolto un bug -> **fix: style issue**

7. Pushare le modifiche sul branch appena creato con il seguente comando:

```bash
    git push origin nomeBranch
```

questo comando creerà un branch con lo stesso nome su GitHub o, se già esistente, pusherà semplicemente le modifiche online.

8. Quando il motivo per cui avete creato il branch è stato soddisfatto, potete fare una pull request su GitHub per unire il branch al main. Andate su GitHub, nella pagina del progetto, e cliccate su "Pull request". Selezionate il branch appena creato e create la pull request. Se tutto è a posto, il branch verrà unito al main.

9. Potete poi eliminare direttamente da GitHub il branch appena mergiato.
