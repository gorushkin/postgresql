db-migrate:
	npx knex migrate:latest

db-create:
	createdb node

db-reset:
	dropdb node || true
	createdb node

db-delete:
	dropdb node || true