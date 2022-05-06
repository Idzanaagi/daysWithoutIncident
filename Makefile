# Makefile
install:
	npm ci
lint: 
	npx eslint .
publish:
	npm publish --dry-run
# first: 
	node index.js
# incident :
	node incident.js
# stat:
	node stat