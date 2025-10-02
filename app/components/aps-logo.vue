<script setup lang="ts">
interface Props {
    size?: string;
}

withDefaults(defineProps<Props>(), {
    size: 'w-20 h-auto'
});
</script>

<template>
    <img :class="size" src="@/assets/logo/aps_logo.svg" alt="APS Logo" />
</template>
