class t extends class{}{async retrieve(){const t=await this.getData();return console.log("wires >>>> ",t),t}async getData(){const t=await fetch("https://aitoralejandro.github.io/wire-catalog/assets/wires.json");return t.ok?await t.json():[]}}class s{static Build(){return new s}start(){(new t).retrieve()}constructor(){console.log("App constructor")}}s.Build().start();
//# sourceMappingURL=index.d89f92af.js.map
