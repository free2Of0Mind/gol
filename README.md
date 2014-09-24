# The Game of Life

To hack on this, you will need [browserify](http://npmjs.org/package/browserify). 
Or, do as I do, and use [opa](http://npmjs.org/package/opa)

```
git clone $this_repo
cd gol
npm install 
browserify -e entry -o public/bundle.js
```
and then open index.html

Or, install opa and watchify
```
npm install -g opa watchify
cd gol
opa -e entry.js -o public/bundle.js -d
// go to localhost:11001
```


