# IronBot vizsgaremek - Külkereskedelmi Technikum - 2023/2024

A vizsgaremek célja egy robot kölcsönzési lehetőséget kínáló webáruház elkészítése.

A kivitelezés Angular keretrendszerben történik

## Fontos!

A fejlesztés jelenlegi "frontend" fázisában az egyes komponensek az alábbi helyre kerülnek (saját 'frontend' könyvtárba!!!):
```
src/app/components/pages/home - teljes oldalas komponensek
src/app/components/partial - oldalakat részlegesen elfoglaló komponensek
src/app/shared/models - egyes modellek helye
src/data.ts - "dummy" adatbázis a frontend fejlesztéshez
```
Projekt klónozása ('main' branch):
```
git clone https://github.com/KiralyPeter/IronBot_Angular.git
```
Lokál repozitori szinkronizálása a GitHub-on lévő verzióval 
(arra az esetre, ha a GitHub-on lévő verzió idő közben változott volna..)
```
git pull origin main
```
Új branch létrehozása
```
git checkout -b <branch név>
```
Ezt az új branch-et kellene fel 'push'-olni origin-re.\
GitHub-on lesz a merge (normál esetben megfelelő mérlegelés után...)

Az új branchj push-olása GitHub-ra (origin-re):
```
git push origin <branch név>
```

GitHib-on megjelenik a "Compare & pull request"

### A GitHub-on a merge-et közös ellenőrzés után végezzük!!!

Visszacsekkolás a 'main'-ra:
```
git checkout main
```
Utána ismét le kell frissíteniaz origin-en lévő master-t lokálba:
```
git pull origin main
```