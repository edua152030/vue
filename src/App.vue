<template>
  <div id="app">
    <p>Aplicação aula</p>
    <exibir-nome v-for="(cliente, chave) in rsCliente" :nome="cliente.nome" ></exibir-nome>
  </div>
</template>

<script lang='ts'>

import AppCls from './AppCls'

export default AppCls

</script>


