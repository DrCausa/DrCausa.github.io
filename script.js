document.addEventListener("DOMContentLoaded", function(){
    const background = document.querySelector("section.background");
    const cover = document.querySelector(".envelope-cover");
    const letterPaper = document.querySelector(".letter-paper");
    const messageContainer = letterPaper.querySelector(".message");
    let currentMessage;
    let lastMessage;
    let mailStatus = false;
    let closeTimeout;

const messages = [
    "Decir adiós nunca es fácil, pero siempre llevaré nuestros recuerdos en mi corazón.",
    "Aunque nuestros caminos se separen, siempre tendrás un lugar especial en mi vida.",
    "No es un adiós, sino un hasta luego. Nos volveremos a encontrar.",
    "Las despedidas son amargas, pero los recuerdos que compartimos son dulces.",
    "Siempre recordaré cada momento contigo, sin importar la distancia.",
    "Puede que nos separemos en este momento, pero nuestra conexión siempre perdurará.",
    "Te deseo lo mejor en tu camino, y espero que la vida te sonría siempre.",
    "Cada despedida es solo el inicio de una nueva historia por escribir.",
    "No importa cuán lejos estemos, nuestros lazos seguirán intactos.",
    "Siempre llevaré en mi corazón lo que compartimos, sin importar dónde estemos.",
    "Gracias por cada risa, cada conversación y cada instante inolvidable.",
    "El tiempo y la distancia no pueden borrar lo que significas para mí.",
    "Te extrañaré más de lo que las palabras pueden expresar.",
    "Nuestra historia no termina aquí, solo toma un nuevo rumbo.",
    "Siempre estaré agradecido por haber coincidido en este viaje llamado vida.",
    "Que el destino nos vuelva a cruzar cuando menos lo esperemos.",
    "Espero que encuentres felicidad y éxito en cada paso que des.",
    "Nos veremos en otro momento, en otro lugar, pero siempre en el corazón.",
    "El mundo es grande, pero la amistad y el cariño nos mantienen cerca.",
    "No es el final, solo una pausa en nuestra historia.",
    "Lleva contigo todo lo bueno que vivimos y deja atrás lo que no suma.",
    "Gracias por haber sido parte de mi vida, aunque sea por un tiempo.",
    "El adiós duele, pero prefiero recordar todo lo hermoso que vivimos.",
    "A veces, las despedidas son solo la antesala de un reencuentro inolvidable.",
    "Nunca olvides que siempre estaré aquí, sin importar la distancia.",
    "Aunque nuestros caminos se separen, los recuerdos quedarán para siempre.",
    "La vida nos llevó por caminos distintos, pero siempre desearé lo mejor para ti.",
    "Lo que vivimos no se desvanece con la distancia, sigue vivo en el corazón.",
    "Ojalá la vida nos vuelva a cruzar en algún momento.",
    "No importa cuánto tiempo pase, siempre te recordaré con cariño.",
    "Cada despedida es la oportunidad de valorar lo que compartimos.",
    "Gracias por haber sido una parte tan especial de mi vida.",
    "Aunque hoy nos separemos, sé que nuestras almas seguirán conectadas.",
    "El destino nos llevó por distintos rumbos, pero siempre serás importante para mí.",
    "No diré adiós, porque en algún lugar del tiempo nos volveremos a encontrar.",
    "Que la vida te llene de felicidad y éxito en cada nuevo camino que tomes.",
    "El cariño y los momentos que compartimos no se desvanecerán con la distancia.",
    "Las despedidas son difíciles, pero prefiero sonreír por lo que vivimos.",
    "Tal vez el adiós sea solo una forma de prepararnos para un reencuentro más especial.",
    "Las palabras no bastan para expresar cuánto te extrañaré.",
    "Espero que la vida te regale muchas razones para sonreír, siempre.",
    "Gracias por todo lo que compartimos, nunca lo olvidaré.",
    "A donde sea que vayas, espero que encuentres la felicidad que mereces.",
    "No es fácil despedirse, pero a veces es necesario para seguir creciendo.",
    "Hoy nos separamos, pero nuestros recuerdos permanecerán por siempre.",
    "Las despedidas son solo un capítulo más en la historia de la vida.",
    "Donde quiera que estés, siempre te llevaré en mi corazón.",
    "No importa la distancia, lo vivido jamás se borra.",
    "Te deseo lo mejor en cada nuevo paso que des en tu camino.",
    "Hoy nos despedimos, pero nuestro vínculo seguirá existiendo en el tiempo."
];
    
/*     const messages = [
        "Eres mi refugio, el lugar donde siempre encuentro paz y alegría.",
        "Cada conversación contigo es un regalo que atesoro profundamente.",
        "Tu risa es mi melodía favorita; suena en mi corazón cada día.",
        "Contigo, cada momento se convierte en un hermoso recuerdo.",
        "Eres la luz que ilumina mis días, incluso en los más oscuros.",
        "Nuestra conexión es un lazo que trasciende el tiempo y la distancia.",
        "Tus sueños son mis sueños, y juntos podemos alcanzarlos.",
        "Cada vez que me miras, siento que el mundo se detiene por un instante.",
        "A tu lado, la vida se siente más vibrante y llena de posibilidades.",
        "Eres mi inspiración y la razón por la que me esfuerzo cada día.",
        "Cada pequeño gesto tuyo me recuerda cuán afortunado soy de tenerte.",
        "Contigo, cada día es una nueva aventura esperando ser descubierta.",
        "Tu amor es la fuerza que me impulsa a ser una mejor persona.",
        "Eres el sueño que nunca supe que tenía, y ahora no puedo imaginar mi vida sin ti.",
        "Tu amor es como una brújula que siempre me guía en la dirección correcta.",
        "A través de tus ojos, descubro un mundo lleno de maravillas.",
        "Tu voz es la calma que necesito en los momentos de tempestad.",
        "Eres la razón detrás de mis sonrisas más sinceras.",
        "Contigo, he aprendido lo que significa amar y ser amado.",
        "Eres el capítulo más hermoso de mi historia.",
        "Cada día a tu lado es un nuevo regalo que agradezco.",
        "Tu amor es un abrazo que me envuelve en cada momento.",
        "Cada recuerdo contigo es un tesoro que guardo en mi corazón.",
        "Eres mi sol en días nublados, siempre brillando con tu luz.",
        "Contigo, he encontrado un hogar en el que mi corazón se siente seguro.",
        "Tu sonrisa tiene el poder de iluminar mis días más oscuros.",
        "Cada vez que me hablas, siento que el universo conspira a nuestro favor.",
        "Eres el motivo por el que creo en el amor verdadero.",
        "A tu lado, he aprendido que la felicidad se encuentra en los momentos más simples.",
        "Eres la razón por la que me despierto con una sonrisa cada mañana.",
        "Contigo, he descubierto la magia de amar sin miedo.",
        "Eres la persona con la que siempre soñé compartir mi vida.",
        "Cada día que pasa, mi amor por ti crece de maneras que no puedo describir.",
        "Tu amor es la melodía que mi corazón siempre quiere escuchar.",
        "Eres el sueño que nunca quiero despertar.",
        "Nuestra conexión es un regalo que atesoro más de lo que las palabras pueden expresar.",
        "A través de ti, he aprendido el verdadero significado de la confianza y el amor.",
        "Cada momento contigo es un capítulo que quiero contar por siempre.",
        "Eres la magia en mi vida, transformando lo ordinario en algo extraordinario.",
        "Tu amor es el faro que guía mi camino en la oscuridad.",
        "Eres mi compañera de vida, y juntos somos imparables.",
        "Tu risa es mi música, y cada nota resuena en mi corazón.",
        "Contigo, he encontrado la fuerza para ser auténtico y vulnerable.",
        "Eres la razón por la que creo en las segundas oportunidades.",
        "A tu lado, he aprendido que el amor verdadero no conoce límites.",
        "Eres el amor que siempre he estado buscando, y finalmente te he encontrado."
    ]; */

    const email = document.querySelector(".email");

    function openMail() {
        if (closeTimeout) clearTimeout(closeTimeout);

        letterPaper.classList.add("active");
        cover.classList.add("open");
        generateMessage();

        closeTimeout = setTimeout(closeMail, 5200);
    }

    function closeMail() {
        letterPaper.classList.remove("active");
        cover.classList.remove("open");
        cover.style.transitionDelay = "0.2s";
        setTimeout(() => {
            cover.style.transitionDelay = "0s";
        }, 200);
    }

    const audio = document.querySelector("audio.bg-music");
    const playButton = document.querySelector("button.play-audio");
    const stopButton = document.querySelector("button.stop-audio");
    const pauseButton = document.querySelector("button.pause-audio");
    const mailButton = document.querySelector("button.open-mail");
        
    function playAudio() {
        audio.play();
    }

    function pauseAudio() {
        audio.pause();
    }

    function stopAudio() {
        audio.pause();
        audio.currentTime = 0;
    }

    mailButton.addEventListener("click", () => {
        if (mailStatus) {
            clearTimeout(closeTimeout);
            closeMail();
            mailStatus = false;
        } else {
            openMail();
            mailStatus = true;
        }
    });

    playButton.addEventListener("click", playAudio);
    pauseButton.addEventListener("click", pauseAudio);
    stopButton.addEventListener("click", stopAudio);

    function generateMessage() {
        currentMessage = messages[Math.floor(Math.random() * messages.length)];
        if (lastMessage === currentMessage) {
            generateMessage();
            return;
        }

        messageContainer.textContent = currentMessage;
        lastMessage = currentMessage;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function loadBackground() {
        for (var i = 1; i <= 16; i++) {
            let imageName = (`${i}.jpeg`);

            const img = document.createElement('img');
            img.src = `images/background/${imageName}`;
            img.style.width = `${getRandomInt(100, 300)}px`;
            img.style.height = `${getRandomInt(100, 300)}px`;

            img.style.top = `${getRandomInt(-10, 110)}%`;
            img.style.left = `${getRandomInt(-10, 110)}%`;

            img.style.transform = `rotate(${getRandomInt(-30, 30)}deg)`;
            img.style.opacity = `${getRandomInt(40, 80)}%`;

            background.appendChild(img);
        }
    }

    loadBackground();
    loadBackground();
    stopAudio();
    playAudio();

    setTimeout(() => {
        email.style.animation = "email-loop-animation 1.2s ease-in-out infinite";
    }, 1300);

    background.style.opacity = "1";
});
