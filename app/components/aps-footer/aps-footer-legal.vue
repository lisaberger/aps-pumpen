<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <div>
        <hr aria-hidden="true" class="h-px border-surface-200 dark:border-surface-700 mt-12" />
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 mt-12">
            <span class="flex items-center gap-4 text-surface-600">
                &copy; APS Höck GmbH {{ currentYear }}
            </span>

            <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <nuxt-link
                    to="/imprint"
                    class="text-surface-600 dark:text-surface-400 cursor-pointer leading-tight"
                >
                    Impressum
                </nuxt-link>
                <nuxt-link
                    to="/privacy"
                    class="text-surface-600 dark:text-surface-400 cursor-pointer leading-tight"
                >
                    Datenschutz
                </nuxt-link>
                <nuxt-link
                    to="/terms-and-conditions"
                    class="text-surface-600 dark:text-surface-400 cursor-pointer leading-tight"
                >
                    AGBs
                </nuxt-link>
            </div>
            <div class="flex items-center gap-6">
                <div
                    v-for="icon in ['facebook', 'whatsapp']"
                    :key="icon"
                    class="w-6 h-6 flex items-center justify-center cursor-pointer"
                >
                    <i :class="`pi pi-${icon} text-surface-500 dark:text-surface-400`" />
                </div>
            </div>
        </div>
    </div>
</template>
