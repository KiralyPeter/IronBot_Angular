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
**A Git repo az IronBot_Angular könyvtárra van inicializálvba! Később a backend-nek külön könyvtára lesz.**

**Az angular FRONTEND szolgáltatást a fejlesztés jelen állapotában a /frontend könyvtárból kell indítani. Pl.:**
```
peter@eagle-nest ~/Dev/IronBot_Angular/frontend [main] 
: ng serve -o
```
**A BACKEND részt a /backend könyvtárból kell indítani:** 
```
npm star
```

Használt NodeJS és Angular verziók:
```
npm version
{
  npm: '9.8.1',
  node: '18.18.2',
  acorn: '8.10.0',
  ada: '2.6.0',
  ares: '1.19.1',
  brotli: '1.0.9',
  cldr: '43.1',
  icu: '73.2',
  llhttp: '6.0.11',
  modules: '108',
  napi: '9',
  nghttp2: '1.57.0',
  nghttp3: '0.7.0',
  ngtcp2: '0.8.1',
  openssl: '3.0.10+quic',
  simdutf: '3.2.14',
  tz: '2023c',
  undici: '5.26.3',
  unicode: '15.0',
  uv: '1.44.2',
  uvwasi: '0.0.18',
  v8: '10.2.154.26-node.26',
  zlib: '1.2.13.1-motley'
}

Angular CLI: 16.2.0
Node: 18.18.2
Package Manager: npm 9.8.1
OS: linux x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1602.0 (cli-only)
@angular-devkit/core         16.2.0 (cli-only)
@angular-devkit/schematics   16.2.0 (cli-only)
@schematics/angular          16.2.0 (cli-only)   
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