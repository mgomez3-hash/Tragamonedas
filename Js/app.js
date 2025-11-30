angular.module("SlotMachineApp", [])
    .controller("SlotMachineController", function ($scope, $timeout) { 
        
        $scope.reels = [
            new Symbol(),
            new Symbol(),
            new Symbol()
        ];
        
        $scope.resultText = "Preciona \"Girar\" para empezar!";
        $scope.resultClass = "info"; 

        $scope.stats = {
            wins: 0,
            nearMisses: 0,
            losses: 0
        };

        $scope.isSpinning = false;
        $scope.spin = function () {
            if ($scope.isSpinning) return; 

            $scope.isSpinning = true;
            $scope.resultText = "Girando...";
            $scope.resultClass = "spinning";
            
            const delayBetweenReels = 300; 
            
            const stopReel = (index, delay) => {
                $timeout(function() {
                    $scope.reels[index] = new Symbol();
                    
                    if (index === $scope.reels.length - 1) {
                        $scope.isSpinning = false;
                        $scope.checkResult(); 
                    }
                }, delay);
            };

            stopReel(0, 500);
            stopReel(1, 500 + delayBetweenReels); 
            stopReel(2, 500 + 2 * delayBetweenReels); 
        };

        $scope.checkResult = function() {
            const symbols = $scope.reels.map(r => r.getName());
            const s1 = symbols[0];
            const s2 = symbols[1];
            const s3 = symbols[2];

            if (s1 === s2 && s2 === s3) {
                // 3 iguales → GANASTE
                $scope.resultText = "¡¡¡Ganaste!";
                $scope.resultClass = "win";
                $scope.stats.wins++;
            } else if (s1 === s2 || s1 === s3 || s2 === s3) {
                $scope.resultText = "¡Tuviste 2 iguales.";
                $scope.resultClass = "near-miss";
                $scope.stats.nearMisses++;
            } else {
                $scope.resultText = "Perdiste.";
                $scope.resultClass = "loss";
                $scope.stats.losses++;
            }
        };

    });