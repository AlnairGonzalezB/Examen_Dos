<template>
    <div>
        <h1>
            Unos libros chidos jeje
        </h1>
        <ul>
            <li v-for="libro in libros" :key="libro.idp">
                -Autor: {{libro.autor}} -Id: {{libro.IdLibro}} -Titulo: {{libro.titulo}} -Editorial: {{libro.editorial}} -Clasificacion: {{libro.clasificacion}} --
                <router-link :to="{ name: 'LibroEdit', params: { id: libro.id }}"> Editar </router-link> --
                <router-link :to="{ name: 'LibroDelete', params: { id: libro.id }}"> Eliminar </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {
    db
} from "../firebase.js";
export default {
    name: "LibroList",
    data() {
        return {
            libros: [],
        };

    },
    created() {
        this.listLibros();
    },
    methods: {
        async listLibros() {
            const data = await db.collection("libros").get();
            this.libros = data.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            console.log(this.libros);
        },
    },
};
</script>
