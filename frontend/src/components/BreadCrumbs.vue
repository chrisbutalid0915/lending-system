<template>
    <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <router-link :to="dashboardUrl">
            <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span></router-link>
          </a>
        </div>
      </li>
<!--      <li v-for="page in pages" :key="page.name">-->
        <div class="flex items-center">
          <svg class="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
          <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="'page'">{{ name }}</a>
        </div>
<!--      </li>-->
    </ol>
  </nav>
</template>

<script>
    import { HomeIcon } from '@heroicons/vue/20/solid'
    export default {
        name: "BreadCrumbs",
        props: {
            name: String
        },
        components: {
            HomeIcon
        },
        data() {
            return{
                pages : [
                    { name: 'Projects', href: '#', current: false },
                    { name: 'Project Nero', href: '#', current: true },
                ],
                dashboardUrl: '/dashboard',
            }
        }
    }
</script>

<style scoped>

</style>