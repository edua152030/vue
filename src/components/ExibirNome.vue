<template>
    <div>
        <p>nome a ser exibido {{nome}}</p>
        <input type="button" value="exbir nome" @click="exibirNome()">
    </div>
</template>

<script lang="ts">

    import ClsExibirNome from "./ExibirNomeCls"
    export default ClsExibirNome

</script>