# Gestion du git

- Branche `master` : Application utilisable par le client
- Branche `development` : Application stable
- Branche de dev : Format *TypeDeFeature*/*TravauxEffectué* et part de devlopment

## Régles de merge

- Les merges se font avec des merge request
- Une merge request est accepté si validée par une personne autre que le demandeur
- Merge sur master = merge validé par tous

## Régles de commit

- `git status` avant chaque commit pour s'assurer d'être sur la bonne branche et vérifier les fichiers envoyés
- Commits réguliers et push au moins à la fin d'une session de travail

# Régles de dév

- Avoir des variables typées le plus possible
- Retours de fonctions typés.
- Variables, fonctions et commentaires en anglais

## Atomic design

- Atome = Composant ionic ( `ion-text`, `ion-img`, etc ...)
- Molécule = Composant de base (resumé producteur)
- Organisme = Fusion des composants (liste des résumés producteurs)
- Template = Page sans les données.

- Pas d'organisme dans les molécules, pas de template dans les organismes.
- Les molécules sont indépendantes les unes des autres.

