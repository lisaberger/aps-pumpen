<script setup lang="ts">
import 'primeicons/primeicons.css';
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <aps-header />

        <main class="flex-1 mt-20">
            <nuxt-page />
        </main>

        <aps-footer />
    </div>
</template>
