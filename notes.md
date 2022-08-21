
[pscale cli - Prisma](https://planetscale.com/docs/tutorials/prisma-quickstart)

[Prisma & PlanetScale Best Practices](https://www.youtube.com/watch?v=iaHt5_hg44c)

[YT Learn with Jason](https://www.youtube.com/watch?v=IUn2gdrPxeE&t=3521s)

init git inside project folder
`git init`

---

optionally create repo on github
`gh repo create <repo-name>`

---

init npm
`npm init -y`
install and init Prisma
`npm i prisma`
`npx prisma init`

RESPONSE IN CONSOLE

```bash
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run **prisma db pull** to turn your database schema into a Prisma schema.
4. Run **prisma generate** to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

after `schema.prisma` is generated update it with `previewFeatures` 

```js
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["referentialIntegrity"]
}

datasource db {
  provider             = "mysql"
  url                  = env("DATABASE_URL")
  shadowDatabaseUrl    = env("SHADOW_DATABASE_URL")
  referentialIntegrity = "prisma"
}
```
## Local development


<!-- `SHADOW_DATABASE_URL` is useful only when using pscale `migrate`

The shadow database is created and deleted automatically each time you run a development-focused command and is primarily used to detect problems such schema drift. -->

## env

**local**
`mysql://root@localhost:3309/<db_name>`

**shadow**
`mysql://root@localhost:3310/<db_name>`

<!-- ### Create Shadow branch

`pscale branch create <db name> shadow`

now we have db `main URL` and `shadow URL`

### Connect to both URLS

`pscale connect fds_02 main --port 3309` 
```bash
Secure connection to database fds_02 and branch main is established!.

Local address to connect your application: 127.0.0.1:3309 (press ctrl-c to quit)
```
**AND** in second terminal window

`pscale connect fds_02 shadow --port 3310`
```bash
Secure connection to database fds_02 and branch shadow is established!.

Local address to connect your application: 127.0.0.1:3310 (press ctrl-c to quit)
```
### Run Migrate (shadow only)
`npx prisma migrate dev`
 add a name to branch eg. `init`

 Whenever you make changes to your database that are reflected in the Prisma schema, you need to manually re-generate Prisma Client or if local connection doesn't work run `npx prisma generete` 

### Maintaining Prisma schema ??
Maintain One Prisma schema can be painful when DB grows and splitting Prisma schema is not good practice. Try to use  [schemix]https://github.com/ridafkih/schemix or [prismix](https://github.com/jamiepine/prismix) -->