install-tools:
	pip install git+https://github.com/darkowlzz/peji.git

build-shop: install-tools
	curl -Lo data.json https://github.com/purdynerdy/peji-data-example/releases/download/v0.2.0/data.json
	peji page generate-site-data data/config-shop.json data.json
	peji page generate-site data/config-shop.json

build-home: install-tools
	peji page generate-site-data data/config-home.json -
	peji page generate-site data/config-home.json

build-cal: install-tools
	peji page generate-site-data data/config-calendar.json -
	peji page generate-site data/config-calendar.json
