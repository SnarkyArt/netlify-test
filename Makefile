install-tools:
	pip install git+https://github.com/darkowlzz/peji.git@v0.0.3

build-shop: install-tools
	peji page generate-site-data data/config-shop.json
	peji page generate-site data/config-shop.json

build-home: install-tools
	peji page generate-site-data data/config-home.json
	peji page generate-site data/config-home.json

build-cal: install-tools
	peji page generate-site-data data/config-calendar.json
	peji page generate-site data/config-calendar.json
