# Makefile
install:
	npm ci
lint: 
	npx eslint .
start: 
	node index.js
