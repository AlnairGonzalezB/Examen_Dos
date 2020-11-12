<template>
<div>
    <h1>
        Borra unos libros no tan chidos
    </h1>
    <button @click="eliminar = !eliminar" v-if="eliminar===false">Eliminar</button>
    <form v-if="eliminar===true">
        <h4>¿Estás seguro que desaeas eliminar?</h4>

        <p>
            <button @click="deleteLibro">Si Eliminar</button>
        </p>
        <p>
            <button @click="eliminar = !eliminar">Cancelar</button>
        </p>
    </form>
</div>
</template>

<script>
import {
    db
} from '../firebase'
import router from '../router'
export default {
    name: "LibroDelete",
    data() {
        return {
            autor: "",
            clasificacion: "",
            editorial: "",
            idLibro: "",
            titulo: "",
            eliminar: false,

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
        async deleteLibro() {
            const id = this.$route.params.id;
            await db.collection('libros').doc(id).delete();
            router.push("/")
        }
    }
}
</script>
