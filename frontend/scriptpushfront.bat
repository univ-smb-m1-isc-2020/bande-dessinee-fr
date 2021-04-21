echo "git pull"
git pull
echo "Supprimer le dossier dist"
rmdir /Q /S dist
echo "Ajout tout"
git add .
echo "Commit"
git commit -m "Push dist script 1"
echo "Build le dossier dist"
ng build
echo "Ajouter tout"
git add .
echo "Commit"
git commit -m "Push dist script 2"
echo "Push"
git push
