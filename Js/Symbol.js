function Symbol() {
    // Lista de símbolos disponibles y sus nombres de archivo
    this.symbolsList = [
        { name: "Cereza", file: "cereza.png" },
        { name: "Limón", file: "limon.png" },
        { name: "Campana", file: "campana.png" },
        { name: "Estrella", file: "estrella.png" },
        { name: "Sandía", file: "sandia.png" }
    ];

    // Atributos
    this.index = Math.floor(Math.random() * this.symbolsList.length); // Índice aleatorio
    this.name = this.symbolsList[this.index].name;

    // Métodos
    this.getImagen = function() {
        return "imagenes/" + this.symbolsList[this.index].file;
    };

    this.getName = function() {
        return this.name;
    };
}