CSS_PATH      = ./marp-themes/speee.css
SCSS_PATH     = ./marp-themes/speee.scss
SRC_PATH      = ./example/example.md
DST_BASE_PATH = ./example/example.png
DST_PATH      = ./example/example.*.png

all: slide

slide: css
	npx @marp-team/marp-cli@latest \
	  $(SRC_PATH) \
	  --output $(DST_BASE_PATH) \
	  --theme-set $(CSS_PATH) \
	  --images png

css:
	sass $(SCSS_PATH) $(CSS_PATH)

clean:
	rm -f $(CSS_PATH) $(DST_PATH)
