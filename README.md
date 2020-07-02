# Test serveur deno (opine & dactyl & denodb)

## database

- create postgres db
- launch `sudo -i -U <user> -d <database> -f ./api/data/create_db.sql`

## .env

```env
PORT=1234
DB_DATABASE='db_name'
DB_HOST='localhost'
DB_USERNAME='username'
DB_PASSWORD='password'
```

## Run Server

- Install deno : `curl -fsSL https://deno.land/x/install/install.sh | sh`  
- or Upgrade : `deno upgrade`
- Install denon: `deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.2.0/denon.ts`

run server :

```bash
cd api
run start
```

config denon: [api/denon.json](api/denon.json)

## Notes

### dependances

- [opine](https://deno.land/x/opine) = express (Voir changement vers [abc](https://deno.land/x/abc) spécifique à deno )
- [opine types](https://deno.land/x/opine/src/types.ts) pour le typage de `req, res, next`
- [cors](https://deno.land/x/cors/#configuring-cors)
- [organ](https://deno.land/x/organ) = morgan (revoir -> erreur `await next()`)
- [dotenv](https://deno.land/x/dotenv)
- [denodb](https://deno.land/x/denodb) guide complet : https://eveningkid.github.io/denodb-docs/docs/getting-started => ORM
- [dactyl](https://deno.land/x/dactyl) => controllers

### Problèmes

- [x] ~~Problème définition table => `TypeError: Cannot read property 'table' of undefined`~~ => oublie du `db.link([Model])`
- [ ] Trouver pourquoi il n'y a pas de retour de la bdd et pas d'erreur …
- [ ] Revoir décompsition des [models](api/models/../app/models/oldConfig) , problème d'ajout des liaison à cause du static
- [ ] Voir de plus prêt la config.ts et cette histoir de `experimentalDecorators`
