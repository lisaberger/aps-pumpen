<template>
    <div class="flex min-h-screen flex-col">
        <aps-header />

        <main class="mt-20 flex-1">
            <nuxt-page />
        </main>

        <aps-footer />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
