document.addEventListener("DOMContentLoaded", () => {
    // Scene containers
    const calmScene = document.getElementById('scene-calm');
    const discoScene = document.getElementById('scene-disco');
    const dogsScene = document.getElementById('scene-dogs');

    // Buttons
    const btnSurprise = document.getElementById('btn-surprise');
    const btnDogs = document.getElementById('btn-dogs');
    const btnBack = document.getElementById('btn-back');

    // Audio files 
    const barkSound = new Audio("https://actions.google.com/sounds/v1/animals/dog_barking.ogg");
    
    // CHANGED: Pointing to your local uploaded audio file
    const discoMusic = new Audio("vibehorn-disco-funk-507218.mp3");
    discoMusic.loop = true; 

    let dogBtnTimeout; 

    // Transition from Calm to Disco
    btnSurprise.addEventListener('click', () => {
        
        // Play music immediately on click to bypass browser blocks
        discoMusic.currentTime = 0;
        discoMusic.play().catch(e => console.log("Audio play prevented:", e));

        calmScene.classList.remove('active');
        
        setTimeout(() => {
            calmScene.classList.add('hidden');
            discoScene.classList.remove('hidden');
            
            setTimeout(() => {
                discoScene.classList.add('active');
                
                // Show the dog button after 3 seconds of dancing using the new class
                dogBtnTimeout = setTimeout(() => {
                    btnDogs.classList.add('visible');
                }, 3000);
                
            }, 50);
        }, 500);
    });

    // Transition from Disco to Dogs
    btnDogs.addEventListener('click', () => {
        discoScene.classList.remove('active');
        
        // Pause music and reset button state
        discoMusic.pause();
        clearTimeout(dogBtnTimeout);
        btnDogs.classList.remove('visible');
        
        // Play the bark sound right away
        barkSound.currentTime = 0;
        barkSound.play().catch(e => console.log("Audio play prevented:", e));

        setTimeout(() => {
            discoScene.classList.add('hidden');
            dogsScene.classList.remove('hidden');
            
            setTimeout(() => {
                dogsScene.classList.add('active');
            }, 50);
        }, 500);
    });

    // Transition back to Calm (Start)
    btnBack.addEventListener('click', () => {
        dogsScene.classList.remove('active');
        barkSound.pause(); // Stop barking
        
        setTimeout(() => {
            dogsScene.classList.add('hidden');
            calmScene.classList.remove('hidden');
            
            setTimeout(() => calmScene.classList.add('active'), 50);
        }, 500);
    });
});