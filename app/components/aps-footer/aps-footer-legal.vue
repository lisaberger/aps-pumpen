<script setup lang="ts">
const currentYear = ref('');

onMounted(() => {
    currentYear.value = new Date().getFullYear();
});

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
    <div class="pb-8 md:px-12 lg:px-20">
        <hr
            aria-hidden="true"
            class="border-surface-200 dark:border-surface-700 h-px"
        />

        <div
            class="mt-8 flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0"
        >
            <span class="text-surface-600 flex items-center gap-4">
                &copy; APS Höck GmbH {{ currentYear }}
            </span>

            <div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
                <nuxt-link
                    v-for="link in LEGAL_LINKS"
                    :key="link.id"
                    :to="link.url"
                    class="text-aps-brand-500 dark:text-surface-400 cursor-pointer leading-tight"
                >
                    {{ link.label }}
                </nuxt-link>
            </div>

            <div class="flex items-center gap-6">
                <nuxt-link
                    to="https://www.facebook.com/apspumpen/?locale=de_DE"
                    external
                    target="_blank"
                    class="flex h-6 w-6 cursor-pointer items-center justify-center"
                >
                    <i
                        class="pi pi-facebook text-surface-500 dark:text-surface-400"
                    />
                </nuxt-link>
                <nuxt-link
                    to="https://www.facebook.com/apspumpen/?locale=de_DE"
                    external
                    target="_blank"
                    class="flex h-6 w-6 cursor-pointer items-center justify-center"
                >
                    <i
                        class="pi pi-whatsapp text-surface-500 dark:text-surface-400"
                    />
                </nuxt-link>
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
