CSS_PATH      = ./marp-themes/speee.css
SCSS_PATH     = ./marp-themes/speee.scss
SRC_PATH      = ./example/example.md
DST_BASE_PATH = ./example/example.png
DST_PATH      = ./example/example.001.png ./example/example.002.png

all: $(DST_PATH)

init:
	git config core.hooksPath .githooks
	npm install -g sass

$(DST_PATH): $(CSS_PATH) $(SRC_PATH)
	npx @marp-team/marp-cli@latest \
	  $(SRC_PATH) \
	  --output $(DST_BASE_PATH) \
	  --theme-set $(CSS_PATH) \
	  --images png

$(CSS_PATH): $(SCSS_PATH)
	sass $(SCSS_PATH) $(CSS_PATH)

clean:
	rm -f $(CSS_PATH) $(DST_PATH)
