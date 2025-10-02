<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import { ref } from 'vue';

const menuItems = ref<MenuItem[]>([
    {
        label: 'Unsere Leistungen',
        url: '/services',
        items: [
            { label: 'Pumpen', url: '/about' },
            { label: 'Blocks', url: '/about' },
            { label: 'UI Kit', url: '/about' },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette',
                        url: '/about'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette',
                        url: '/about'
                    }
                ]
            }
        ]
    },
    {
        label: 'Unternehmen',
        icon: 'pi pi-star',
        url: '/about'
    },
    {
        label: 'Jobs',
        icon: 'pi pi-search',
        url: '/career'
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        url: '/contact'
    }
]);
</script>

<template>
    <!-- <header class="fixed w-full">
        <menu-bar :model="menuItems" class="min-h-20">
            <template #start>
                <nuxt-link to="/">
                    <aps-logo />
                </nuxt-link>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <nuxt-link :to="item.url" class="flex items-center" v-bind="props.action">
                    <span>{{ item.label }}</span>
                    <Badge
                        v-if="item.badge"
                        :class="{ 'ml-auto': !root, 'ml-2': root }"
                        :value="item.badge"
                    />
                    <span
                        v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
                    >
                        {{ item.shortcut }}
                    </span>
                    <i
                        v-if="hasSubmenu"
                        :class="[
                            'pi pi-angle-down ml-auto',
                            { 'pi-angle-down': root, 'pi-angle-right': !root }
                        ]"
                    />
                </nuxt-link>
            </template>
        </menu-bar>
    </header> -->
    <header class="resize-container-7 h-full bg-surface-50 dark:bg-surface-950">
        <div
            class="w-full bg-surface-0 dark:bg-surface-900 py-0 px-12 lg:px-12 flex items-center justify-between relative lg:fixed min-h-20 border-b border-surface-200"
        >
            <aps-logo />
            <a
                v-styleclass="{
                    selector: '@next',
                    enterFromClass: 'hidden',
                    enterActiveClass: 'animate-fadein',
                    leaveToClass: 'hidden',

                    leaveActiveClass: 'animate-fadeout',
                    hideOnOutsideClick: true,
                    resizeSelector: '.resize-container-7',
                    hideOnResize: true
                }"
                class="cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 mt-1"
            >
                <i class="pi pi-bars text-2xl!" />
            </a>
            <div
                class="items-center grow justify-between hidden lg:flex absolute lg:static w-full lg:bg-transparent lg:dark:bg-transparent bg-surface-0 dark:bg-surface-900 left-0 top-full px-12 lg:px-0 z-50 shadow lg:shadow-none lg:min-h-20"
            >
                <ul
                    class="list-none p-0 py-4 h-full lg:py-0 m-0 flex grow lg:items-center lg:ml-8 text-surface-900 dark:text-surface-0 select-none flex-col lg:flex-row cursor-pointer lg:min-h-20"
                >
                    <li class="relative h-full">
                        <a
                            v-styleclass="{
                                selector: '@next',
                                enterFromClass: 'hidden',
                                enterActiveClass: 'animate-scalein',
                                leaveToClass: 'hidden',
                                leaveActiveClass: 'animate-fadeout',
                                hideOnOutsideClick: true
                            }"
                            class="flex h-full px-0 lg:px-8 py-2 items-center text-aps-brand-500 dark:text-surface-0 lg:hover:bg-surface-100 lg:dark:hover:bg-surface-800 hover:text-primary font-medium transition-colors duration-150 lg:min-h-20"
                        >
                            <span>Products</span>
                            <i class="pi pi-angle-down ml-auto lg:ml-4" />
                        </a>
                        <ul
                            class="list-none m-0 rounded-border shadow-0 lg:absolute top-20 bg-surface-0 dark:bg-surface-900 hidden origin-top w-full lg:w-60"
                        >
                            <li>
                                <a
                                    class="flex border-b border-surface-200 px-2 py-2 items-center hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150 gap-2"
                                >
                                    <i class="pi pi-th-large" />
                                    <span>Features</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    class="flex px-2 py-2 rounded items-center hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150 gap-2"
                                >
                                    <i class="pi pi-microchip" />
                                    <span>Solutions</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    class="flex px-2 py-2 rounded items-center hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150 gap-2"
                                >
                                    <i class="pi pi-users" />
                                    <span>Customers</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a
                                    v-styleclass="{
                                        selector: '@next',
                                        enterFromClass: 'hidden',
                                        enterActiveClass: 'animate-scalein',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'animate-fadeout',
                                        hideOnOutsideClick: true
                                    }"
                                    class="flex px-2 py-2 rounded items-center hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150 gap-2"
                                >
                                    <i class="pi pi-lightbulb" />
                                    <span>Support</span>
                                    <i class="pi pi-angle-down ml-auto lg:-rotate-90" />
                                </a>
                                <ul
                                    class="list-none p-1 lg:pl-1 pl-4 rounded-border shadow-0 lg:shadow lg:absolute bg-surface-0 dark:bg-surface-900 hidden origin-top w-full lg:w-60 cursor-pointer left-full ml-2 top-0"
                                >
                                    <li>
                                        <a
                                            class="flex px-4 py-2 rounded items-center hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150 gap-2"
                                        >
                                            <i class="pi pi-user" />
                                            <span>Help Center</span>
                                        </a>
                                    </li>
                                    <li class="relative">
                                        <a
                                            class="flex px-4 py-2 rounded items-center hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150 gap-2"
                                        >
                                            <i class="pi pi-question-circle" />
                                            <span>Faq</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="h-full">
                        <a
                            class="flex h-full px-0 lg:px-8 py-2 items-center text-surface-900 dark:text-surface-0 lg:hover:bg-surface-100 lg:dark:hover:bg-surface-800 hover:text-primary font-medium transition-colors duration-150 lg:min-h-20"
                        >
                            <span>Corporate</span>
                        </a>
                    </li>
                    <li class="h-full">
                        <a
                            class="flex h-full px-0 lg:px-8 py-2 items-center text-surface-900 dark:text-surface-0 lg:hover:bg-surface-100 lg:dark:hover:bg-surface-800 hover:text-primary font-medium transition-colors duration-150 lg:min-h-20"
                        >
                            <span>Resources</span>
                        </a>
                    </li>
                    <li class="h-full">
                        <a
                            class="flex h-full px-0 lg:px-8 py-2 items-center text-surface-900 dark:text-surface-0 lg:hover:bg-surface-100 lg:dark:hover:bg-surface-800 hover:text-primary font-medium transition-colors duration-150 lg:min-h-20"
                        >
                            <span>Pricing</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
