!function(){class t extends class{}{retrieve(){return this.getData()}async getData(){const t=await fetch("https://aitoralejandro.github.io/wire-catalog/assets/wires.json"),s=t.ok?await t.json():[];return console.log("wires >>>> ",s),s}}class s{static Build(){return new s}start(){(new t).retrieve()}constructor(){console.log("App constructor")}}s.Build().start()}();
//# sourceMappingURL=index.179bba0e.js.map
