<template>
    <div class="bg-surface-900 p-12 lg:p-20 lg:py-10">
        <div class="flex flex-wrap lg:flex-row flex-col-reverse gap-12 items-center">
            <div class="flex-1 p-4">
                <h1 class="text-5xl font-bold text-white mb-4 leading-tight">
                    Die ganze Welt der
                    <span class="text-primary underline">Pumpentechnik.</span>
                </h1>
                <p class="text-2xl text-gray-400 mb-8 leading-normal">
                    Flexibilität, Know-how und persönlicher Service – mit diesen Pfeilern sind wir
                    seit mittlerweile 40 Jahren erfolgreich im Großraum Augsburg und Schwaben aktiv.
                </p>
                <p class="text-2xl text-gray-400 mb-8 leading-normal mt-8">Alles aus einer Hand</p>
                <ul class="list-none flex flex-col gap-4">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-trophy text-primary text-xl!" />
                        <span class="text-gray-400 leading-normal"> Beratung </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-sparkles text-primary text-xl!" /><span
                            class="text-gray-400 leading-normal"
                            >Planung</span
                        >
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-bolt text-primary text-xl!" /><span
                            class="text-gray-400 leading-normal"
                            >Ausführung</span
                        >
                    </li>
                </ul>
                <prime-button
                    label="Unsere Leistungen"
                    severity="secondary"
                    size="large"
                    class="mt-12"
                    icon="pi pi-arrow-right"
                    icon-pos="right"
                />
            </div>
            <div class="flex-1 text-center lg:text-right overflow-hidden">
                <img
                    src="@/assets/bk-amarex-pro-hero.png"
                    alt="Image"
                    class="w-50 max-w-md lg:w-80 mx-auto"
                />
            </div>
        </div>
    </div>
</template>
