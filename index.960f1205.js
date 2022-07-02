class t extends class{}{retrieve(){return this.getData()}async getData(){const t=await fetch("https://aitoralejandro.github.io/wire-catalog/assets/wires.json"),s=await t.json();return console.log(s),s}}class s{static Build(){return new s}start(){(new t).retrieve()}constructor(){console.log("App constructor")}}s.Build().start();
//# sourceMappingURL=index.960f1205.js.map
