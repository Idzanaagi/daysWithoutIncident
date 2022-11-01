# Makefile
install:
	npm ci
lint: 
	npx eslint .
start: 
	node index.js
stat: 
	node src/getStat.js