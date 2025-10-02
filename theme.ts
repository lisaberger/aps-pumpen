import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const APS = definePreset(Aura, {
    semantic: {
        primary: {
            50: 'var(--color-primary-50)',
            100: 'var(--color-primary-100)',
            200: 'var(--color-primary-200)',
            300: 'var(--color-primary-300)',
            400: 'var(--color-primary-400)',
            500: 'var(--color-primary-500)',
            600: 'var(--color-primary-600)',
            700: 'var(--color-primary-700)',
            800: 'var(--color-primary-800)',
            900: 'var(--color-primary-900)',
            950: 'var(--color-primary-950)'
        }
    },
    components: {
        Menubar: {
            root: 'bg-primary-500 text-white border-none shadow-md',
            menu: 'bg-primary-500',
            item: 'text-white hover:bg-primary-600 transition-colors',
            label: 'text-white font-medium',
            icon: 'text-white'
        }
    }
});

export default APS;
