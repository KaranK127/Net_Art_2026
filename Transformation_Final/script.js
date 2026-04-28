document.addEventListener("DOMContentLoaded", () => {
    // Scene containers
    const calmScene = document.getElementById('scene-calm');
    const discoScene = document.getElementById('scene-disco');
    const dogsScene = document.getElementById('scene-dogs');

    // Buttons
    const btnSurprise = document.getElementById('btn-surprise');
    const btnDogs = document.getElementById('btn-dogs');
    const btnBack = document.getElementById('btn-back');

    // Audio file (Google's free sound library)
    const barkSound = new Audio("https://actions.google.com/sounds/v1/animals/dog_barking.ogg");

    // Transition from Calm to Disco
    btnSurprise.addEventListener('click', () => {
        calmScene.classList.remove('active');
        
        setTimeout(() => {
            calmScene.classList.add('hidden');
            discoScene.classList.remove('hidden');
            // Small delay to allow display block to render before animating opacity
            setTimeout(() => discoScene.classList.add('active'), 50);
        }, 500);
    });

    // Transition from Disco to Dogs
    btnDogs.addEventListener('click', () => {
        discoScene.classList.remove('active');
        
        setTimeout(() => {
            discoScene.classList.add('hidden');
            dogsScene.classList.remove('hidden');
            
            setTimeout(() => {
                dogsScene.classList.add('active');
                // Play the bark sound when entering the dog scene
                barkSound.currentTime = 0;
                barkSound.play().catch(e => console.log("Audio play prevented by browser:", e));
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