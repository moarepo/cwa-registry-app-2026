<script setup lang="ts">
 import {defineAsyncComponent} from "vue"

 const alerModal = defineAsyncComponent(()=> ( import("./components/aleretMoadal.vue")  ) )
</script>

<template>
  <section class="flex flex-col space-y-1 w-full h-screen p-1 font-Rubik overflow-hidden">

    <router-view/>

    <!--- Modals -->
    <alerModal/>

  </section>
</template>
