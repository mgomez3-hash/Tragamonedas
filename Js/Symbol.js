function Symbol() {
    this.symbolsList = [
        { name: "Cereza", file: "cereza.png" },
        { name: "Limón", file: "limon.png" },
        { name: "Campana", file: "campana.png" },
        { name: "Estrella", file: "estrella.png" },
        { name: "Sandía", file: "sandia.png" }
    ];

    this.index = Math.floor(Math.random() * this.symbolsList.length); 
    this.name = this.symbolsList[this.index].name;

    this.getImagen = function() {
        return "imagenes/" + this.symbolsList[this.index].file;
    };

    this.getName = function() {
        return this.name;
    };
}