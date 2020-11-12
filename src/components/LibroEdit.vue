<template>
<div>
    <h1>
        Edita unos libros chidos
    </h1>
    <form @submit.prevent="updateLibro">
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
} from '../firebase'
import router from '../router'
export default {
    name: "LibroEdit",
    data() {
        return {
            autor: "",
            clasificacion: "",
            editorial: "",
            idLibro: "",
            titulo: "",

        }
    },
    created() {
        this.getLibro();
    },
    methods: {
        async getLibro() {
            const id = this.$route.params.id;
            const data = await db.collection("libros").doc(id).get()
            const libro = (data.data())
            this.autor = libro.autor
            this.clasificacion = libro.clasificacion
            this.editorial = libro.editorial
            this.IdLibro = libro.IdLibro
            this.titulo = libro.titulo
        },
        async updateLibro() {
            const id = this.$route.params.id;
            await db.collection('libros').doc(id).set({
                autor: this.autor,
                clasificacion: this.clasificacion,
                editorial: this.editorial,
                IdLibro: this.IdLibro,
                titulo: this.titulo,
            })
            router.push("/")
        }
    }
}
</script>
