const steps = document.querySelectorAll('.progress');
const formSteps = document.querySelectorAll('.form-step');
const biometricVideo = document.getElementById("biometricVideo");

function nextStep() {
    const currentStep = document.querySelector('.form-step.active');
    const nextStep = currentStep.nextElementSibling;

    if (nextStep) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
        if (nextStep.id === "form2") {
            playBiometricVideo();
        }
        updateProgress();
    }
}

function playBiometricVideo() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            biometricVideo.srcObject = stream;
            biometricVideo.play();

            // Mostrar mensaje de validación exitosa después de 5 segundos
            setTimeout(() => {
                alert("Validación Exitosa");
                biometricVideo.srcObject.getTracks().forEach(track => track.stop()); // Apagar la cámara
                biometricVideo.pause();
            }, 5000);
        })
        .catch((error) => {
            console.log('Error accessing camera:', error);
        });
}

function updateProgress() {
    const currentStepIndex = Array.from(formSteps).indexOf(document.querySelector('.form-step.active'));
    steps.forEach((step, index) => {
        if (index <= currentStepIndex) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}
