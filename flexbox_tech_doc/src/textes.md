## 1 - Introduction

Flexbox est une méthode de mise en page selon un axe principal, permettant de disposer des éléments en ligne ou en colonne. Les éléments se dilatent ou se rétractent pour occuper l'espace disponible. 

# Pourquoi Flexbox ?
Pendant longtemps, les seuls outils de mise en page CSS fiables et compatibles avec les navigateurs, étaient les propriétés concernant les flotteurs (boîtes flottantes) et le positionnement. Ces outils sont bien et fonctionnent, mais restent à certains égards plutôt limitatifs et frustrants.

Les simples exigences de mise en page suivantes sont difficiles si ce n'est impossibles à réaliser de manière pratique et souple avec ces outils :

- centrer verticalement un bloc de contenu dans son parent ;
- faire que tous les enfants d'un conteneur occupent tous une même quantité de hauteur/largeur disponible selon l'espace offert ;
- faire que toutes les colonnes dans une disposition multi‑colonnes aient la même hauteur même si leur quantité de contenu diffère.

Comme vous le verrez dans les paragraphes suivants, flexbox facilite considérablement les tâches de mise en page. Approfondissons un peu !

# Un exemple simple
Observons un premier exemple de mise en page.

Qu'avons‑nous ? Un élément <header> avec un en‑tête de haut niveau à l'intérieur, et un élément <section> contenant trois <article>s. Flexbox est l'outil parfait pour créer cette disposition classique sur trois colonnes.

illustration: img/exemple_flexbox.png


## 2 - Propriétés du flex-container

Les propriétés suivantes permettent de définir le contexte flexbox sur l'élément qui servira de conteneur aux autres.

- display: flex;
Permet d'installer un contexte flex et fait de tous les enfants directes des flex-items.

- flex-flow: row wrap;
Indique l'axe principal (column/row/column-revers/row-reverse) et la possibilité de retour à la ligne ou non (wrap/no-wrap).

- justify-content: flex-start;
Indique le mode d'agencement des items sur l'axe principal (flex-start/flex-end/center/space-around/space-between/space-evenly).

- align-items: stretch;
Indique le mode d'agencement des items sur l'axe secondaire (flex-start/flex-end/center/stretch/baseline).

- align-content: stretch;
Dans le cas d'un retour à la ligne autorisé dès qu'une seconde ligne d'items est crée, indique le mode d'agencement des lignes les unes par rapport aux autres (flex-strat/flex-end/center/stretch/space-between/space-around).

## 3 - Propriétés des flex-items

Les propriétés suivantes permettent de définir un comportement particulier à l'item correspondant.

- order: -1;
Permet de positionner l'item par rapport aux autres. Par défaut, tous les éléments sont à 0. Une valeur négative placera donc l'item avant tous les autres. Une valeur positive le placera après tous les autres.

- align-self: flex-end;
Permet de positionner un item différemment des autres. Si tous le container est à align-items:center; on peut décider de mettre l'un d'eux seulement à flex-end pour le distinguer. Align-self prend les même valeurs que align-items et est à "auto" par défaut.

- flex: 0 1 auto;
Il s'agit d'une propriété raccourcie indiquant respectivement les valeurs pour flex-grow, flex-shrink et flex-basis.
Par défaut: flex-grow est à 0 (l'item ne peut pas grandir), flex-shrink est à 1 (l'item peut réduire) et flex-basis à auto (l'item fait la taille de son contenu).


## 4 - Une navbar responsive

Voici un exemple de code permettant de réaliser une barre de navigation responsive, qui s'affichera de manière fluide aussi bien sur un téléphone, une tablette ou un ordinateur.

## 5 - Un formulaire fluide

Voici la réalisation d'un formulaire standard en mode flexbox. Chaque champ trouvera sa place de manière fluide en fonction de l'espace disponible.

## 6 - Le holy-grail-layout 

Voici l'exemple d'une mise en page complète, totalement fluide. Les éléments sur les côtés possèdent une taille fixe et la partie centrale s'adaptera à toutes les tailles de fenêtre. De plus une requête @media permet de gérer également le passage en colonne pour les petits écrans.