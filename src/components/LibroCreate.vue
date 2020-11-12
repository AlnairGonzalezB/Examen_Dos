<template>
<div>
    <h1>
        Crear unos libros chidos
    </h1>
    <form @submit.prevent="addLibro">
        <p>
            Autor:
            <input type="text" v-model="autor">
        </p>
        <p>
            Clasificacion:
            <select v-model="clasificacion">
                <option value="A (de A los niños les gusta)">A (de A los niños les gusta)</option>
                <option value="B (de Bueno para todos)">B (de Bueno para todos)</option>
                <option value="C (de Chido para todos)">C (de Chido para todos)</option>
                <option value="D (de Digale a su niño que no lo lea)">D (de Digale a su niño que no lo lea)</option>
            </select>
        </p>
        <p>
            Editorial:
            <input type="text" v-model="editorial">
        </p>
        <p>
            Id:
            <input type="text" v-model="IdLibro">
        </p>
        <p>
            Titulo:
            <input type="text" v-model="titulo">
        </p>
        <button type="submit">aceptar</button>
    </form>
</div>
</template>

<script>
import {
    db
} from "../firebase.js";
import router from '../router'
export default {
    name: "LibroCreate",
    data() {
        return {
            autor: "",
            clasificacion: "",
            editorial: "",
            IdLibro: "",
            titulo: "",

        }
    },
    methods: {
        async addLibro() {
            await db.collection('libros').add({
                autor: this.autor,
                clasificacion: this.clasificacion,
                editorial: this.editorial,
                IdLibro: this.IdLibro,
                titulo: this.titulo,
            })
            this.autor = "";
            this.clasificacion = "";
            this.editorial = "";
            this.IdLibro = "";
            this.titulo = "";
            router.push("/");
        }
    }
}
</script>
