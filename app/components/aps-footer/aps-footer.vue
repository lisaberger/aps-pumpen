<template>
    <footer
        class="bg-surface-50 dark:bg-surface-900 px-6 p-20 md:px-12 lg:px-20 flex flex-col gap-8"
    >
        <hr aria-hidden="true" class="h-px border-surface-200 dark:border-surface-700" />
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-4">
                    <aps-logo />
                    <div class="text-surface-600 dark:text-surface-400 leading-normal">
                        Flexibilität, Know-how und persönlicher Service – mit diesen Pfeilern ist
                        der Augsburger Pumpen Service seit mittlerweile 40 Jahren erfolgreich im
                        Großraum Augsburg und Schwaben aktiv.
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-6">
                <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">
                    Company
                </div>
                <div class="flex flex-col gap-4">
                    <a
                        v-for="item in [
                            'About Peak',
                            'Factories',
                            'Careers',
                            'Environmental Initiatives'
                        ]"
                        :key="item"
                        tabIndex="0"
                        class="text-surface-700 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 leading-tight transition-colors cursor-pointer"
                    >
                        {{ item }}
                    </a>
                </div>
            </div>
            <div class="flex flex-col gap-6">
                <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">
                    Account
                </div>
                <div class="flex flex-col gap-4">
                    <a
                        v-for="item in [
                            'Manage Account',
                            'Saved Items',
                            'My Cart',
                            'Wishlist',
                            'Orders & Returns'
                        ]"
                        :key="item"
                        tabIndex="0"
                        class="text-surface-700 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 leading-tight transition-colors cursor-pointer"
                    >
                        {{ item }}
                    </a>
                </div>
            </div>
            <div class="flex flex-col gap-6">
                <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">
                    Legal
                </div>
                <div class="flex flex-col gap-4">
                    <nuxt-link
                        v-for="item in [
                            'Investor Relations',
                            'Data Privacy',
                            'Terms of Service',
                            'Legal Information'
                        ]"
                        :key="item"
                        tab-index="0"
                        class="text-surface-700 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 leading-tight transition-colors cursor-pointer"
                    >
                        {{ item }}
                    </nuxt-link>
                </div>
            </div>
        </div>
        <aps-footer-legal />
    </footer>
</template>
