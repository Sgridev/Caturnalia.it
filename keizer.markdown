---
title: Keizer
layout: default
---
<!doctype html>
<section class="newsCat-section">
<h1 class="newsCat-title" data-aos="fade-zoom-in">Sistema di abbinamenti Keizer</h1>
<div class="newsCat-div">
   <div style="padding : 40px">
      <p>Il sistema di abbinamenti per tornei di scacchi chiamato "Keizer" è molto diffuso in Olanda e Belgio, ma è praticamente sconosciuto nel resto del mondo.  
         È un vero peccato, perché il Keizer offre interessanti possibilità nell'organizzazione delle competizioni interne dei circoli.
      </p>
      <p>
         Il sistema vide la luce nei tardi anni '50 del secolo scorso. Il suo ideatore fu il presidente di un circolo scacchistico della cittadina di Hengelo (Olanda). Il suo nome era Keizer, che in lingua olandese significa "Imperatore" (da notare la forte somiglianza con la parola tedesca "kaiser"). Tuttavia il sistema da lui ideato fu associato al suo nome soltanto in tempi successivi. 
      </p>
      <p>Intorno al 1950 il sistema di abbinamento nei tornei scacchistici di gran lunga più diffuso era il Round-Robin, conosciuto anche con il nome di "Girone all'italiana". Keizer, come tutti gli organizzatori di tornei scacchistici, si trovava talvolta a doversi confrontare con i problemi causati dall'assenza non preventivata di uno o più iscritti: giocatori che non potevano disputare la partita per mancanza dell'avversario, scacchiere vuote, giocatori senza avversario che giocano "lampo" su tavoli vicini a chi gioca la partita di torneo, e via dicendo.  </p>
      <p>Inoltre nei tornei all'italiana con giocatori di forza molto diversa si finisce inevitabilmente per assistere a partite di scarso interesse: un giocatore con un rating di 1900 punti abbinato ad un altro con rating 1400 difficilmente ottiene un risultato diverso dalla vittoria. </p>
      <p>
         Per questi motivi Mister Keizer propose il suo sistema, rimediando a questi problemi.  
         I principi di base del sistema Keizer sono i seguenti: 
      </p>
      <ul style="list-style-type:none; font-weight: bold; padding-left: 0;">
         <li style="border-style: groove; margin: 5px;">Non è obbligatorio disputare tutti i turni in programma</li>
         <li style="border-style: groove; margin: 5px;">Ci si può iscrivere anche a torneo iniziato</li>
         <li style="border-style: groove; margin: 5px;">Gli abbinamenti vengono calcolati poco prima dell'inizio del turno sulla base dei giocatori presenti</li>
         <li style="border-style: groove; margin: 5px;">Tutti i giocatori presenti ad un turno disputeranno sicuramente la partita, tranne in caso di numero di giocatori dispari (in tal caso un giocatore vincerà per forfait)</li>
         <li style="border-style: groove; margin: 5px;">Ogni giocatore non è obbligato ad incontrare tutti gli altri</li>
         <li style="border-style: groove; margin: 5px;">Viceversa, può succedere che due giocatori si incontrino più di una volta nel corso del torneo</li>
         <li style="border-style: groove; margin: 5px;">Ad ogni turno il sistema produce abbinamenti tra giocatori di forza simile</li>
         <li style="border-style: groove; margin: 5px;">I giocatori assenti ad un turno non perdono il diritto di disputare i successivi turni del torneo</li>
      </ul>
      <p>Vediamo ora con maggiore dettaglio come si imposta un torneo col sistema Keizer.  
         Si compila una lista degli iscritti in ordine decrescente di ELO.  
         Ad ogni giocatore viene assegnato un "Valore" iniziale. Viene assegnato il Valore iniziale più alto al giocatore con l'ELO maggiore. Al secondo giocatore della lista si assegna un Valore inferiore di uno al Valore del primo giocatore, al terzo un Valore inferiore di due, e via dicendo.
      </p>
      <p>Se per esempio si assegna il Valore 50 al giocatore con l'ELO più alto, il secondo giocatore avrà un Valore di 49, il terzo di 48, ecc. ecc.  
         In un torneo con 35 giocatori il cui primo della lista si vedrà assegnare il Valore di 50, vedrà il giocatore all'ultima posizione della lista con un Valore assegnato di 16. Il range di valori del torneo sarà quindi 16-50, o per essere più precisi 50-16 (vedremo più avanti perché).  
      </p>
      <p>Gli abbinamenti in un torneo Keizer si stabiliscono in un modo molto semplice: il giocatore con il Valore più alto incontra il secondo, il terzo incontra il quarto, e così via. </p>
      <p>
         A questa regola possono essere applicate svariate eccezioni: per esempio, se due giocatori si sono incontrati al turno precedente si può stabilire che non possano giocare nuovamente tra loro per uno o più turni; oppure se due giocatori abbinati tra loro hanno avuto entrambi il Nero tre volte consecutive si può stabilire che l'abbinamento non è possibile. Il sistema Keizer non pone vincoli in questo senso.  
         I direttori di torneo sono liberi di applicare (o non applicare) le limitazioni o i correttivi che ritengono più opportuni.  
      </p>
      <p>
         I colori vengono attribuiti grosso modo come in tutti gli altri sistemi: si tende a bilanciare il numero di Bianchi e di Neri.  
      </p>
      <p>
         Fin qui tutto normale. Manca la vera "novità" del sistema Keizer: l'attribuzione del punteggio.  
         La regola di base infatti dice che "Ad un giocatore che ne batte un altro vengono attribuiti i punti del Valore dell'avversario, in caso di patta la meta', in caso di sconfitta nessun punto".  
         Aiutiamoci con un esempio, tratto dal regolamento iniziale scritto dallo stesso Mister Keizer. Immaginiamo un torneo che vede la seguente lista di iscritti, in ordine decrescente di ELO:  
      </p>
      <div style="display: flex; justify-content: center; padding-bottom: 20px;">
         <table width="250" cellspacing="0" cellpadding="0" bordercolor="#0000FF" border="1">
            <tbody>
               <tr bgcolor="#FFFF99" align="center" style="font-weight: bold;">
                  <td>N.</td>
                  <td>Giocatore</td>
                  <td>ELO</td>
                  <td>Valore</td>
               </tr>
               <tr align="center">
                  <td>1.</td>
                  <td>Johnson</td>
                  <td>2260</td>
                  <td>50</td>
               </tr>
               <tr align="center">
                  <td>2.</td>
                  <td>Petersen</td>
                  <td>2158</td>
                  <td>49</td>
               </tr>
               <tr align="center">
                  <td>3.</td>
                  <td>Baker</td>
                  <td>2110</td>
                  <td>48</td>
               </tr>
               <tr align="center">
                  <td>4.</td>
                  <td>Butcher</td>
                  <td>2040</td>
                  <td>47</td>
               </tr>
               <tr align="center">
                  <td>5.</td>
                  <td>Carter</td>
                  <td>1995</td>
                  <td>46</td>
               </tr>
               <tr align="center">
                  <td>6.</td>
                  <td>Harrison</td>
                  <td>1910</td>
                  <td>45</td>
               </tr>
               <tr align="center">
                  <td>7.</td>
                  <td>Smith</td>
                  <td>1867</td>
                  <td>44</td>
               </tr>
               <tr align="center">
                  <td>8.</td>
                  <td>Higgins</td>
                  <td>1720</td>
                  <td>43</td>
               </tr>
               <tr align="center">
                  <td>9.</td>
                  <td>White</td>
                  <td>1500</td>
                  <td>42</td>
               </tr>
               <tr align="center">
                  <td>10.</td>
                  <td>Brown</td>
                  <td>1440</td>
                  <td>41</td>
               </tr>
            </tbody>
         </table>
      </div>
      <p>
         A ciascun giocatore viene assegnato un Valore iniziale. Per questo ipotetico torneo si è deciso che il Valore di riferimento da assegnare al giocatore col rating più alto è 50; stabilito il valore di riferimento, si procede assegnando al secondo rating il Valore di 49, e così via.  
         Essendo a inizio torneo i giocatori in numero di 10, il range del torneo sarà 50- 41. Tale Valore non sarà costante per tutto il torneo, ma verosimilmente cambierà ad ogni turno.  
      </p>
      <p>
         Così, secondo la regola menzionata prima, gli abbinamenti (e i risultati) del primo turno saranno i seguenti:  
      </p>
      <div style="display: flex; justify-content: center; padding-bottom: 20px;">
         <table width="200" cellspacing="0" cellpadding="0" bordercolor="#0000FF" border="1">
            <tbody>
               <tr align="center" style="font-weight: bold;">
                  <td colspan="3" bgcolor="#FFFF99">Risultati del primo Turno:</td>
               </tr>
               <tr align="center">
                  <td>Johnson</td>
                  <td>Petersen</td>
                  <td>1-0</td>
               </tr>
               <tr align="center">
                  <td>Baker</td>
                  <td>Butcher</td>
                  <td>0, 5-0, 5</td>
               </tr>
               <tr align="center">
                  <td>Carter</td>
                  <td>Harrison</td>
                  <td>0-1</td>
               </tr>
               <tr align="center">
                  <td>Smith</td>
                  <td>Higgins</td>
                  <td>0, 5-0, 5</td>
               </tr>
               <tr align="center">
                  <td>White</td>
                  <td>Brown</td>
                  <td>0-1</td>
               </tr>
            </tbody>
         </table>
      </div>
      <p>
         La classifica dopo ogni turno viene stilata sommando il risultato ottenuto al Valore che ciascun giocatore ha prima del turno. Continuiamo con l'esempio, che ci mostra la classifica dopo il primo Turno:  
      </p>
      <div style="display: flex; justify-content: center; padding-bottom: 20px;">
         <table width="350" cellspacing="0" cellpadding="0" bordercolor="#0000FF" border="1">
            <tbody>
               <tr bgcolor="#FFFF99" align="center" style="font-weight: bold;">
                  <td>Posiz.</td>
                  <td>Nome</td>
                  <td>Valore Iniziale  
                     + Risultato 1°T
                  </td>
                  <td>Totale</td>
                  <td>NUOVO  
                     VALORE
                  </td>
               </tr>
               <tr align="center">
                  <td>1.</td>
                  <td>Johnson</td>
                  <td>50+49</td>
                  <td>99</td>
                  <td>50</td>
               </tr>
               <tr align="center">
                  <td>2.</td>
                  <td>Harrison</td>
                  <td>45+46</td>
                  <td>91</td>
                  <td>49</td>
               </tr>
               <tr align="center">
                  <td>3.</td>
                  <td>Brown</td>
                  <td>41+42</td>
                  <td>83</td>
                  <td>48</td>
               </tr>
               <tr align="center">
                  <td>4.</td>
                  <td>Baker</td>
                  <td>48+23, 5</td>
                  <td>71, 5</td>
                  <td>47</td>
               </tr>
               <tr align="center">
                  <td>5.</td>
                  <td>Butcher</td>
                  <td>47+24</td>
                  <td>71</td>
                  <td>46</td>
               </tr>
               <tr align="center">
                  <td>6.</td>
                  <td>Smith</td>
                  <td>44+21, 5</td>
                  <td>65, 5</td>
                  <td>45</td>
               </tr>
               <tr align="center">
                  <td>7.</td>
                  <td>Higgins</td>
                  <td>43+22</td>
                  <td>65</td>
                  <td>44</td>
               </tr>
               <tr align="center">
                  <td>8.</td>
                  <td>Petersen</td>
                  <td>49+0</td>
                  <td>49</td>
                  <td>43</td>
               </tr>
               <tr align="center">
                  <td>9.</td>
                  <td>Carter</td>
                  <td>46+0</td>
                  <td>46</td>
                  <td>42</td>
               </tr>
               <tr align="center">
                  <td>10.</td>
                  <td>White</td>
                  <td>42+0</td>
                  <td>42</td>
                  <td>41</td>
               </tr>
            </tbody>
         </table>
      </div>
      <p> Non è strano vedere una classifica di un torneo di scacchi dopo un turno che attribuisce al giocatore in testa ben novantanove punti?  
         Sicuramente ci dovremo fare l'abitudine.  
         Si noti che i Valori di alcuni giocatori sono rimasti uguali (Johnson) mentre per molti altri sono cambiati anche sensibilmente (Petersen è passato da 49 a 43)  
         A questo punto siamo pronti a generare gli abbinamenti per il secondo turno:  
      </p>
      <div style="display: flex; justify-content: center; padding-bottom: 20px;">
         <table width="200" cellspacing="0" cellpadding="0" bordercolor="#0000FF" border="1">
            <tbody>
               <tr align="center" style="font-weight: bold;">
                  <td colspan="3" bgcolor="#FFFF99">Risultati del secondo Turno:</td>
               </tr>
               <tr align="center">
                  <td>Harrison</td>
                  <td>Johnson</td>
                  <td>1-0</td>
               </tr>
               <tr align="center">
                  <td>Brown</td>
                  <td>Baker</td>
                  <td>1-0</td>
               </tr>
               <tr align="center">
                  <td>Butcher</td>
                  <td>Smith</td>
                  <td>0, 5-0, 5</td>
               </tr>
               <tr align="center">
                  <td>Higgins</td>
                  <td>Petersen</td>
                  <td>0-1</td>
               </tr>
               <tr align="center">
                  <td>Carter</td>
                  <td>White</td>
                  <td>0, 5-0, 5</td>
               </tr>
            </tbody>
         </table>
      </div>
      <p>Che danno luogo a questa classifica:  </p>
      <div style="display: flex; justify-content: center; padding-bottom: 20px;">
         <table width="370" cellspacing="0" cellpadding="0" bordercolor="#0000FF" border="1">
            <tbody>
               <tr bgcolor="#FFFF99" align="center" style="font-weight: bold;">
                  <td>Posiz.</td>
                  <td>Nome</td>
                  <td>Valore + Risultato  
                     1°T + Risultato 2°T
                  </td>
                  <td>Totale</td>
                  <td>NUOVO  
                     VALORE
                  </td>
               </tr>
               <tr align="center">
                  <td>1.</td>
                  <td>Harrison</td>
                  <td>49+42+50</td>
                  <td>141</td>
                  <td>50</td>
               </tr>
               <tr align="center">
                  <td>2.</td>
                  <td>Brown</td>
                  <td>48+41+47</td>
                  <td>136</td>
                  <td>49</td>
               </tr>
               <tr align="center">
                  <td>3.</td>
                  <td>Johnson</td>
                  <td>50+43+0</td>
                  <td>93</td>
                  <td>48</td>
               </tr>
               <tr align="center">
                  <td>4.</td>
                  <td>Butcher</td>
                  <td>46+23, 5+2, 5</td>
                  <td>92</td>
                  <td>47</td>
               </tr>
               <tr align="center">
                  <td>5.</td>
                  <td>Smith</td>
                  <td>45+22+23</td>
                  <td>90</td>
                  <td>46</td>
               </tr>
               <tr align="center">
                  <td>6.</td>
                  <td>Petersen</td>
                  <td>43+0+44</td>
                  <td>87</td>
                  <td>45</td>
               </tr>
               <tr align="center">
                  <td>7.</td>
                  <td>Baker</td>
                  <td>47+23+0</td>
                  <td>70</td>
                  <td>44</td>
               </tr>
               <tr align="center">
                  <td>8.</td>
                  <td>Higgins</td>
                  <td>44+22, 5+0</td>
                  <td>66, 5</td>
                  <td>43</td>
               </tr>
               <tr align="center">
                  <td>9.</td>
                  <td>Carter</td>
                  <td>42+0+20, 5</td>
                  <td>63, 5</td>
                  <td>42</td>
               </tr>
               <tr align="center">
                  <td>10.</td>
                  <td>White</td>
                  <td>41+0+21</td>
                  <td>62</td>
                  <td>41</td>
               </tr>
            </tbody>
         </table>
      </div>
      <p>
         Guardate il punteggio di Johnson: è diminuito! Strano, vero? Niente paura, nel Keizer può succedere.  
         Il fenomeno si spiega perchè i Valori asseganti ad ogni giocatore vengono rivalutati dopo ogni turno, come abbiamo visto prima.  
         I valori hanno effetto retroattivo, se così si può dire: il Valore rivalutato di ogni giocatore si applica anche alle partite già giocate. Questo è il motivo per cui ci possono essere oscillazioni nel punteggio di un giocatore. 
      </p>
      <p> Lo scopo di questi continui aggiustamenti è quello di garantire ad ogni turno abbinamenti tra giocatori di indice di forza simile. Infatti un giocatore con rating alto ma fuori forma finisce verosimilmente a metà classifica (se non in fondo!), viceversa un giocatore con rating medio-basso che durante il torneo migliora il suo gioco puo' finire rapidamente in testa alla classifica!</p>
      <p>
         Per la completa gestione di un torneo Keizer è decisamente raccomandabile l'uso di un software di gestione tornei. Particolarmente adatto è <a href="http://www.jbfsoftware.com" style="font-weight: bold;">Sevilla, della JBFSoftware</a> è quello che noi utilizzeremo.  
         Il programma, scritto dall'olandese J. P. Hendriks, è gratuito e permette di gestire un torneo Keizer lasciando al Direttore di Gara ampia libertà di personalizzazione dei criteri di abbinamento, di spareggio, di gestione delle assenze e dei report.  
      </p>
   </div>
</div>
<section>