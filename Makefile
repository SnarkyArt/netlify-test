install-tools:
	pip install git+https://github.com/darkowlzz/peji.git

build: install-tools
	peji page generate-site-data data/config.json
	peji page generate-site data/config.json
