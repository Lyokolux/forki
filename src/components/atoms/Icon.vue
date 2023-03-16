<template>
  <component :is="icons[icon]" :color="color" :size="size" :stroke-width="strokeWidth" />
</template>

<script setup lang="ts">
import * as icons from "lucide-vue-next";

type IconProps = {
  icon: string
  size?: string
  color?: string
  strokeWidth?: number
}

withDefaults(defineProps<IconProps>(), {
  size: '1.5rem',
  color: 'currentColor',
  strokeWidth: 2
})
</script>