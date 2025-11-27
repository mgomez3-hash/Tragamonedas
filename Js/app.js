angular.module("SlotMachineApp", [])
    .controller("SlotMachineController", function ($scope, $timeout) { // Inyectamos $timeout para la animación opcional
        
        // --- 1. Símbolos (Carretes) ---
        $scope.reels = [
            new Symbol(),
            new Symbol(),
            new Symbol()
        ];
        
        // --- 3. Resultado ---
        $scope.resultText = "¡Gira para empezar!";
        $scope.resultClass = "info"; // Clase CSS para el estilo del resultado

        // --- 4. Contador de Estadísticas ---
        $scope.stats = {
            wins: 0,
            nearMisses: 0,
            losses: 0
        };

        // --- 2. Botón para Girar ---
        $scope.isSpinning = false;

        $scope.spin = function () {
            if ($scope.isSpinning) return; // Evitar giros múltiples

            $scope.isSpinning = true;
            $scope.resultText = "Girando...";
            $scope.resultClass = "spinning";
            
            // Animación/retraso opcional (suma puntos)
            let spinTime = 1000; // 1 segundo de "giro"
            
            // En una máquina real, los carretes se detendrían uno por uno.
            // Aquí, simulamos la actualización en el DOM después del retraso.

            $timeout(function() {
                // Generar un nuevo símbolo aleatorio para cada carrete
                $scope.reels[0] = new Symbol();
                $scope.reels[1] = new Symbol();
                $scope.reels[2] = new Symbol();
                
                $scope.isSpinning = false;
                $scope.checkResult(); // Evaluar la combinación
            }, spinTime);
        };

        // --- 3. Mostrar el Resultado (Evaluación) ---
        $scope.checkResult = function() {
            const symbols = $scope.reels.map(r => r.getName());
            const s1 = symbols[0];
            const s2 = symbols[1];
            const s3 = symbols[2];

            if (s1 === s2 && s2 === s3) {
                // 3 iguales → GANASTE
                $scope.resultText = "¡¡¡GANASTE!!! 🥳";
                $scope.resultClass = "win"; // Verde
                $scope.stats.wins++;
            } else if (s1 === s2 || s1 === s3 || s2 === s3) {
                // 2 iguales → CASI
                $scope.resultText = "¡Casi! Tuviste 2 iguales.";
                $scope.resultClass = "near-miss"; // Amarillo/Naranja
                $scope.stats.nearMisses++;
            } else {
                // Todas diferentes → PERDISTE
                $scope.resultText = "Perdiste. Inténtalo de nuevo.";
                $scope.resultClass = "loss"; // Rojo
                $scope.stats.losses++;
            }
        };

    });