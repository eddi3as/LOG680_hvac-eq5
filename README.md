# Kanban Metrics
Nos metrics de kanban on été divisé en trois grand groupe, "issues", "pull request" et "builds".
Pour les métriques "issues" ils ont été demandés lors du laboratoire.
Pour les métriques "pull request" nous avons décidé de ceux-ci.
Pour les métriques "builds" nous avons décidé de ceux-ci.

## Issues Metrics:
● Temps (lead time) pour une tâche donnée<br>
&emsp;&emsp; Le calcul est ainsi: on prend le temps quand le "issue" à été complété moins le temps quand le "issue" à été ouvert.

● Temps (lead time) pour les tâches terminées dans une période donnée<br>
&emsp;&emsp; Le calcul est ainsi: temps total des "issues" complétés divisé par le nombre total de "issues" complétés

● Nombre de tâches actives pour une colonne donnée<br>
&emsp;&emsp; Le calcul est ainsi: on prend le total des "issues" qui sont ouverts.

● Nombre de tâches complétés pour une période donnée <br>
&emsp;&emsp; Le calcul est ainsi: on prend le total des "issues" qui sont fermés.


## Pull Request Metrics:

● Nombre de "pull request" en conflits pour une période donnée <br>
&emsp;&emsp; Pour ce métrique, nous avons décidé de prendre les pull requests en conflit pour avoir un meilleur aperçue sur les problèmes rencontrés. Ce métrique, nous permet d'observer de quelle branche provient le ou les conflits, pour ainsi pouvoir remédier à la situation. Pour ce métrique il n'y a pas de calcul. Ce métrique nous permet de répondre à la question: les "pull request" sont-il en conflit la plupart du temps?

● Pourcentage de "pull request" en conflit<br>
&emsp;&emsp; Pour ce métrique, il nous permet d'avoir un aperçue global au niveau des conflits. Ceci nous dit s'il y a un grand problème au niveau des conflits comparativement à la majorité des "pull request". Le calcul est ainsi: nombre total de "pull request" en conflit divisé par le nombre total de "pull request". Ce métrique nous permet de répondre à la question: quel est le pourcentage des "pull request" qui sont en conflit?

● Pourcentage de "pull request" complétés<br>
&emsp;&emsp; Pour ce métrique, il nous permet d'avoir un aperçue global au niveau des "pull request" complétés. Le calcul est ainsi: nombre total de "pull request" complétés divisé par le nombre total de "pull request". Ceci nous dit s'il y a un problème quand vient le temps de compléter les  "pull request". Ce métrique nous permet de répondre à la question: quel est le pourcentage des "pull request" qui sont complétés?

● Temps moyen (lead time) des "pull request" dans une période donnée.<br>
&emsp;&emsp; Pour ce métrique, il nous permet d'avoir une plus grande granularité au niveau du temps de completion des "pull request". Le calcul est ainsi: temps total des "pull request" complétés divisé par le nombre total de "pull request" complétés. Ceci nous dit s'il y a un problème au niveau du temps que cela prends entre l'ouverture d'un "pull request" et la fermeture de celui-ci. Ce métrique nous permet de répondre à la question: les "pull request" sont-il fermé promptement?

● Temps (lead time) pour un "pull request" donnée dans une période donnée<br>
&emsp;&emsp; Pour ce métrique, il nous permet d'avoir une plus grande granularité au niveau du temps de completion d'un "pull request" précis. Le calcul est ainsi: on prend le temps quand le "pull request" à été complété moins le temps quand le "pull request" à été ouvert. Ceci nous permet de voir si le temps. Ce métrique nous permet de répondre à la question: que peut-on faire pour eviter cela une prochaine fois?


# Labels
Les labels choisis sont une inspiration d'un millieu de travail qui est présentement actif dont lequel un des membres de l'équipe en fait partie.


### bug-P1
Bug de priorité numéro 1 très urgent doit être réparé maintenant

### bug-P2
Bug de priorité numéro 2 urgent mais pas autant doit être réparer en dû temps

### bug-P3
Bug de priorité numéro 3 pas très urgent doit être réparer quand les autres priotirité sont terminés

### enhancement
Nouvelle demande d'amélioration ou nouvelle fonctionnalité 

### in analysis
Requête est entrain de ce faire analyser 

### in development
Requête est entrain de ce faire développer 

### testing - QA
Requête est entrain de ce faire tester 

### documentation
Requête est entrain de ce faire documenter 

### duplicate
Requête est un duplicat d'une autre requête 

### feedback needed
Requête a besoin de clarification pour poursuivre 

### unable to replicate
La demande ne peût être répliquer du côté du developpement



# Gitflow Workflow
Notre gitflow encore une fois est une inspiration d'un millieu de travail qui est présentement actif dont lequel un des membres de l'équipe en fait partie.

## Voici notre workflow:
### main
La branche principale qui garde à jours les derniers changements.
Les changements peuvent provenir des prochaines branches seulement.

### dev
La branche dev est une branche fils de main qui est utiliser pour le developement de nouvelle demande avant le transfert vers la branche main

### hotfix
La branche hotfix est une branche fils de main qui est utilisé pour les réparations immédiate

### feature
La branche feature est utilisé pour les nouvelles demandes qui ne sont pas déjà présente dans le code comme un nouveau module qui sera ensuite transféré vers la branche dev


# To build the project
1. If it's the first tiime, build the project using the commands in the directory
   npm install
   npm run build
   npm run start
