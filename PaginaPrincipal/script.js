document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.benefits-tabs button');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab) => {
        tab.addEventListener('click', function () {
            const target = this.getAttribute('data-tab');
            
            tabs.forEach((t) => t.classList.remove('active'));
            contents.forEach((content) => {
                if (content.id === target) {
                    content.style.display = 'flex';
                } else {
                    content.style.display = 'none';
                }
            });

            this.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var toggles = document.querySelectorAll('.faq-toggle');
    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var answer = this.parentElement.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.textContent = '+';
            } else {
                answer.style.display = 'block';
                this.textContent = '-';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var controlGastosBTN = document.getElementById('controlGastosBTN');
    var beneficio2BTN = document.getElementById('beneficio2BTN');
    var beneficio3BTN = document.getElementById('beneficio3BTN');

    var tabContentControlGastos = document.getElementById('control-de-gastos');
    var tabContentBeneficio2 = document.getElementById('beneficio-2');
    var tabContentBeneficio3 = document.getElementById('beneficio-3');

    controlGastosBTN.addEventListener('click', function() {
        tabContentControlGastos.style.display = 'block';
        tabContentBeneficio2.style.display = 'none';
        tabContentBeneficio3.style.display = 'none';
    });

    beneficio2BTN.addEventListener('click', function() {
        tabContentControlGastos.style.display = 'none';
        tabContentBeneficio2.style.display = 'block';
        tabContentBeneficio3.style.display = 'none';
    });

    beneficio3BTN.addEventListener('click', function() {
        tabContentControlGastos.style.display = 'none';
        tabContentBeneficio2.style.display = 'none';
        tabContentBeneficio3.style.display = 'block';
    });
});
