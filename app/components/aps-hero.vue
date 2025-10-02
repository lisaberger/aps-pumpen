<template>
    <div class="bg-surface-900 p-12 px-2 lg:p-20">
        <div
            class="flex flex-col-reverse flex-wrap items-center gap-12 lg:flex-row"
        >
            <!-- text content -->
            <transition
                appear
                enter-active-class="transition ease-out duration-800"
                enter-from-class="opacity-0 -translate-x-10"
                enter-to-class="opacity-100 translate-x-0"
            >
                <div class="flex-1 p-4">
                    <h1
                        class="mb-4 text-5xl leading-tight font-bold text-white"
                    >
                        Die ganze Welt der
                        <span class="text-primary underline"
                            >Pumpentechnik.</span
                        >
                    </h1>
                    <p class="mb-8 text-2xl leading-normal text-gray-400">
                        Flexibilität, Know-how und persönlicher Service – mit
                        diesen Pfeilern sind wir seit mittlerweile 40 Jahren
                        erfolgreich im Großraum Augsburg und Schwaben aktiv.
                    </p>
                    <p class="mt-8 mb-8 text-2xl leading-normal text-gray-400">
                        Alles aus einer Hand
                    </p>
                    <ul class="flex list-none flex-col gap-4">
                        <li class="flex items-center gap-2">
                            <i class="pi pi-trophy text-primary text-xl!" />
                            <span class="leading-normal text-gray-400">
                                Beratung
                            </span>
                        </li>
                        <li class="flex items-center gap-2">
                            <i
                                class="pi pi-sparkles text-primary text-xl!"
                            /><span class="leading-normal text-gray-400"
                                >Planung</span
                            >
                        </li>
                        <li class="flex items-center gap-2">
                            <i class="pi pi-bolt text-primary text-xl!" /><span
                                class="leading-normal text-gray-400"
                                >Ausführung</span
                            >
                        </li>
                        <li class="flex items-center gap-2">
                            <i class="pi pi-bolt text-primary text-xl!" /><span
                                class="leading-normal text-gray-400"
                                >Ausführung</span
                            >
                        </li>
                    </ul>
                    <nuxt-link to="/services">
                        <prime-button
                            label="Unsere Leistungen"
                            size="large"
                            outlined
                            link
                            class="mt-12"
                            icon="pi pi-arrow-right"
                            icon-pos="right"
                        />
                    </nuxt-link>
                </div>
            </transition>

            <!-- pump hero image -->
            <transition
                appear
                enter-active-class="transition ease-out duration-800"
                enter-from-class="opacity-0 translate-y-8"
                enter-to-class="opacity-100 translate-y-0"
            >
                <div class="flex-1 overflow-hidden text-center lg:text-right">
                    <img
                        src="@/assets/images/pumps/bk-amarex-pro-hero.png"
                        alt="Image"
                        class="mx-auto w-50 max-w-md lg:w-80"
                    />
                </div>
            </transition>
        </div>
    </div>
</template>
