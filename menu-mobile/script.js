
     const btnMobile = document.getElementById('btn-mobile');

        function toggleMenu(){
            const nav = document.getElementById('nav');
            nav.classList.toggle('active'); //adiciona uma classe html 
        }

            btnMobile.addEventListener('click', toggleMenu);


    