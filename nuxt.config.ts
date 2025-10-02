import tailwindcss from '@tailwindcss/vite';
import APS from './theme';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    vite: {
        plugins: [tailwindcss()]
    },

    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/test-utils',
        '@primevue/nuxt-module',
        '@nuxtjs/i18n'
    ],
    css: ['~/assets/css/main.css'],
    primevue: {
        options: {
            ripple: true,
            theme: {
                preset: APS,
                prefix: 'p',
                darkModeSelector: 'system'
            }
        },
        components: {
            prefix: 'prime'
        }
    },

    app: {
        pageTransition: { name: 'page', mode: 'opt-in' },
        head: {
            title: 'APS Höck GmbH',
            htmlAttrs: {
                lang: 'de'
            },
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    }
});
