# Gestion du git

- Branche `master` : Application utilisable par le client
- Branche `devlopment` : Application stable
- Branche de dev : Format *NomDeLaFeature*/*TravauxEffectué* et part de devlopment

## Régles de merge

- Les merges se font avec des merge request
- Une merge request est accepté si validé par une personne autre que le demandeur
- Merge sur master = merge validé par tous

## Régle de commit

- `git status` avant chaque commit pour s'assurer d'être sur la bonne branche et vérifier les fichiers envoyés
- Un commit = un push

# Régle de dév

- Avoir des variables typés (pas d'any)
- Retour de fonction typé.
- Variable et fonction en anglais
- Commentaire et doc en français

## Atomic design

- Atome = Composant ionic ( `ion-text`, `ion-img`, etc ...)
- Molécule = Composant de base (resumé producteur)
- Organisme = Fusion des composants (liste des résumés producteurs)
- Template = Page sans les données.

- Pas d'organisme dans les molécules, pas de template dans les organismes.
- Les molécules sont indépendantes les unes des autres.

