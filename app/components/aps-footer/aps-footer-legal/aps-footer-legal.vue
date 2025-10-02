<script setup lang="ts">
const currentYear = new Date().getFullYear();

const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const LEGAL_LINKS = [
    { id: 1, label: 'Impressum', url: '/imprint' },
    { id: 2, label: 'Datenschutz', url: '/privacy' },
    { id: 1, label: ' AGBs', url: '/terms-and-conditions' }
];
</script>

<template>
    <div class="md:px-12 lg:px-20">
        <hr aria-hidden="true" class="h-px border-surface-200 dark:border-surface-700 mt-12" />
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 mt-12">
            <span class="flex items-center gap-4 text-surface-600">
                &copy; APS Höck GmbH {{ currentYear }}
            </span>

            <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <nuxt-link
                    v-for="link in LEGAL_LINKS"
                    :key="link.id"
                    :to="link.url"
                    class="text-aps-brand-500 underline underline-offset-2 decoration-aps-brand-500 dark:text-surface-400 cursor-pointer leading-tight"
                >
                    {{ link.label }}
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
                <prime-button
                    severity="primary"
                    text
                    rounded
                    icon="pi pi-arrow-up"
                    @click="scrollToTop"
                />
            </div>
        </div>
    </div>
</template>
