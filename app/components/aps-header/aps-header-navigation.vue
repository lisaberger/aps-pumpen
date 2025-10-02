<template>
    <div
        class="bg-surface-0 dark:bg-surface-900 border-surface-200 fixed mt-9 flex min-h-20 w-full items-center justify-between border-b px-12 py-0 lg:px-24"
    >
        <nuxt-link to="/" class="cursor-pointer">
            <aps-logo />
        </nuxt-link>
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
            class="text-surface-700 dark:text-surface-100 mt-1 block cursor-pointer lg:hidden"
        >
            <i class="pi pi-bars text-2xl!" />
        </a>
        <div
            class="bg-surface-0 dark:bg-surface-900 absolute top-full left-0 z-50 hidden w-full grow items-center justify-between px-12 shadow lg:static lg:flex lg:min-h-20 lg:bg-transparent lg:px-0 lg:shadow-none lg:dark:bg-transparent"
        >
            <ul
                class="text-surface-900 dark:text-surface-0 m-0 flex h-full grow cursor-pointer list-none flex-col p-0 py-4 select-none lg:ml-8 lg:min-h-20 lg:flex-row lg:items-center lg:py-0"
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
                        class="text-aps-brand-500 dark:text-surface-0 lg:hover:bg-surface-100 lg:dark:hover:bg-surface-800 hover:text-primary flex h-full items-center px-0 py-2 font-medium transition-colors duration-150 lg:min-h-20 lg:px-8"
                    >
                        <span>Products</span>
                        <i class="pi pi-angle-down ml-auto lg:ml-4" />
                    </a>
                    <ul
                        class="rounded-border shadow-0 bg-surface-0 dark:bg-surface-900 top-20 m-0 hidden w-full origin-top list-none lg:absolute lg:w-60"
                    >
                        <li>
                            <a
                                class="border-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 flex items-center gap-2 border-b px-2 py-2 transition-colors duration-150"
                            >
                                <i class="pi pi-th-large" />
                                <span>Features</span>
                            </a>
                        </li>
                        <li>
                            <a
                                class="hover:bg-surface-100 dark:hover:bg-surface-800 flex items-center gap-2 rounded px-2 py-2 transition-colors duration-150"
                            >
                                <i class="pi pi-microchip" />
                                <span>Solutions</span>
                            </a>
                        </li>
                        <li>
                            <a
                                class="hover:bg-surface-100 dark:hover:bg-surface-800 flex items-center gap-2 rounded px-2 py-2 transition-colors duration-150"
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
                                class="hover:bg-surface-100 dark:hover:bg-surface-800 flex items-center gap-2 rounded px-2 py-2 transition-colors duration-150"
                            >
                                <i class="pi pi-lightbulb" />
                                <span>Support</span>
                                <i
                                    class="pi pi-angle-down ml-auto lg:-rotate-90"
                                />
                            </a>
                            <ul
                                class="rounded-border shadow-0 bg-surface-0 dark:bg-surface-900 top-0 left-full ml-2 hidden w-full origin-top cursor-pointer list-none p-1 pl-4 lg:absolute lg:w-60 lg:pl-1 lg:shadow"
                            >
                                <li>
                                    <a
                                        class="hover:bg-surface-100 dark:hover:bg-surface-800 flex items-center gap-2 rounded px-4 py-2 transition-colors duration-150"
                                    >
                                        <i class="pi pi-user" />
                                        <span>Help Center</span>
                                    </a>
                                </li>
                                <li class="relative">
                                    <a
                                        class="hover:bg-surface-100 dark:hover:bg-surface-800 flex items-center gap-2 rounded px-4 py-2 transition-colors duration-150"
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
                        class="text-surface-900 dark:text-surface-0 lg:hover:bg-surface-100 lg:dark:hover:bg-surface-800 hover:text-primary flex h-full items-center px-0 py-2 font-medium transition-colors duration-150 lg:min-h-20 lg:px-8"
                    >
                        <span>Corporate</span>
                    </a>
                </li>
                <li class="h-full">
                    <a
                        class="text-surface-900 dark:text-surface-0 lg:hover:bg-surface-100 lg:dark:hover:bg-surface-800 hover:text-primary flex h-full items-center px-0 py-2 font-medium transition-colors duration-150 lg:min-h-20 lg:px-8"
                    >
                        <span>Resources</span>
                    </a>
                </li>
                <li class="h-full">
                    <a
                        class="text-surface-900 dark:text-surface-0 lg:hover:bg-surface-100 lg:dark:hover:bg-surface-800 hover:text-primary flex h-full items-center px-0 py-2 font-medium transition-colors duration-150 lg:min-h-20 lg:px-8"
                    >
                        <span>Pricing</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
