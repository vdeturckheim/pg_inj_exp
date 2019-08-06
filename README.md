# Starting postgres with docker
```bash
$ docker run -p 5432:5432 -e POSTGRES_PASSWORD=pwd -e POSTGRES_USER=usr -e POSTGRES_DB=db postgre
```

# starting the application

You will need to create a `sqreen.json` file first (see (https://my.sqreen.io)[https://my.sqreen.io]).

```bash
PGUSER=usr PGHOST=localhost PGPASSWORD=pwd PGDATABASE=db PGPORT=5432 node server.js
```

# Performing injection

```bash
$ curl -X POST   http://localhost:8080/injection   -H 'Content-Type: application/json'   -d '{
  "sql": "'\'' OR 1=1"
  }'
```
