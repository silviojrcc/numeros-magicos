(function () {

    class JuegoNumerosMagicos {
        #numero;
        #NumeroAAdivinar;
        #juegoTerminado = true;
        constructor(numero){
            this.#numero = numero;
        }

        get numero(){
            return this.#numero;
        }

        set numero(numero){
            this.#numero = numero;
        }

        get NumeroAAdivinar(){
            return this.#NumeroAAdivinar;
        }

        set NumeroAAdivinar(NumeroAAdivinar){
            this.#NumeroAAdivinar = NumeroAAdivinar;
        }

        get juegoTerminado(){
            return this.#juegoTerminado;
        }

        set juegoTerminado(juegoTerminado){
            this.#juegoTerminado = juegoTerminado;
        }

        generarNumeroAAdivinar(){
            this.NumeroAAdivinar = Math.floor(Math.random() * (100 + 1));
            console.log(this.#NumeroAAdivinar);
        }

        determinarResultado(){
            if (this.#numero === this.#NumeroAAdivinar) {
                this.juegoTerminado = true;
                terminarJuego(); //esta linea creo que esta mal y no se como hacerlo
                return "Felicidades! Ganaste el juego!";
            }

            if (this.#numero < this.#NumeroAAdivinar) {
                return `El numero seleccionado es menor que el numero mágico`;
            }

            if (this.#numero > this.#NumeroAAdivinar) {
                return `El numero seleccionado es mayor que el numero mágico`;
            }
        }
    }

    function prepararJuegoNuevo() {
        botonComenzarJuego.classList.add("d-none");
        formulario.classList.remove("d-none");

        juegoNumerosMagicos.juegoTerminado = false;
        juegoNumerosMagicos.generarNumeroAAdivinar();
    }

    function terminarJuego(params) {
        botonComenzarJuego.classList.remove("d-none");
        formulario.classList.add("d-none");
    }

    function jugar(numero) {
        if (!(numero < 0 || numero > 100)) {
            juegoNumerosMagicos.numero = numero;
            resultado.textContent = juegoNumerosMagicos.determinarResultado();
        } else {
            resultado.textContent = "Tenes que ingresar un numero del 0 al 100";
        }
    }

    const resultado = document.querySelector(".resultado");
    const formulario = document.querySelector(".formulario");
    const botonComenzarJuego = document.querySelector(".boton-comenzar-juego");
    const juegoNumerosMagicos = new JuegoNumerosMagicos();

    botonComenzarJuego.addEventListener("click", (e) => {
        e.preventDefault();
        prepararJuegoNuevo();
    });


    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const numero =  parseInt(formulario.numero.value) || -1;

        if (juegoNumerosMagicos.juegoTerminado) {
            terminarJuego();
        } else {
            jugar(numero);
        }
    });

})();