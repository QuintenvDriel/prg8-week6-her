# prg8-week6-her
herkansing van weekopdracht 6 , programmeren 8


Welke dataset heb je gebruikt?
Ik heb de weather dataset gebruikt.

Is je dataset geschikt voor classification? Wat wordt hier mee bedoeld?
ja op deze manier kan er makkelijk uit een grote berg data vergeleken worden of er regen verwacht kan worden of niet op basis van eerder gemeten data.
clasification betekent dat je grote hoeveelheden aan data kan organiseren in categorieën. waardoor het makkelijker word informatie uit te halen.

Heb je de data bewerkt of opgeschoond voordat je decision tree bent gaan tekenen? Waarom wel / niet ?
ja ik heb de data gesorteerd op willekeur. ik heb dit voor de zekerheid toegepast om fouten verkeerde training te voorkomen omdat het kan zijn dat de data zo verdeeld staat dat alle goede uitslagen bij elkaar staan en alle slechte bij elkaar waardoor je bij het trainen verkeerde uitslagen kunnen komen, omdat er dan alleen met goede of slechte uitslagen gewerkt word.

Heb je een decision tree kunnen tekenen? Welke kolom uit jouw CSV is volgens jouw decision tree het meest belangrijk?
ja het is mij gelukt om een decesiontree te tekenen, voor mijn decision tree zijn de kolomen min/max themp belangrijk omdat deze data heel belangrijk is bij het berekenen van regen of niet.

Heb je met behulp van testdata de accuracy van jouw model kunnen berekenen? Vind je deze accuracy goed genoeg?
ja ik heb met testdata de accuracy kunnen berekenen en dit kwam uit op 0.8356164383561644, ik vind dit op dit moment prima omdat het weer sowieso moeilijk te voorspellen is en omdat 0.8 nog heel dicht bij 1 ligt.

Leg kort uit wat het nut is van een confusion matrix. Heb jij een confusion matrix kunnen tekenen?
Een confusion matrix is een hulpmiddel dat wordt gebruikt bij de evaluatie van de prestaties van een classificatiemodel. Het geeft een overzicht van de voorspelde en werkelijke klassenlabels van de gegevens en helpt bij het beoordelen van de nauwkeurigheid van het model. ik heb een confusion matrix kunnen tekenen in mijn code.  	            Voorspelde droog	Voorspelde regen
Daadwerkelijk regen	       60	               5
Daadwerkelijk droog	       6	              295

Heb je jouw model (de decision tree) kunnen opslaan, en inladen in een aparte HTML pagina? Waarom is dit handig?
ik heb mijn decision tree kunnen oplsaan in de decisiontree.js , maar het inladen hiervan in een apparte HTML pagina is nog niet gelukt. het lukte mij namelijk niet om deze op de juiste manier in te laden.
voordelen:
Herbruikbaarheid 
Schaalbaarheid
Laadtijd optimalisatie
Offline beschikbaarheid

