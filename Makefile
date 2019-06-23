install-tools:
	pip install git+https://github.com/darkowlzz/peji.git@v0.0.1

build: install-tools
	peji page generate-site-data data/config.json
	peji page generate-site data/config.json

build-home: install-tools
	peji page generate-site-data data/config-home.json
	peji page generate-site data/config-home.json
