<template>
  <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
    <div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
      <div class="ml-4 mt-2">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">{{currentRouteName}}</h1>
      </div>

      <div class="ml-4 mt-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div class="ml-4">
            <h3 class="text-base font-semibold leading-6 text-gray-900">{{ user.username }}</h3>
          </div>
        </div>
      </div>
    </div>

    <bread-crumbs :name="currentRouteName"></bread-crumbs>
  </div>
</template>

<script>
  import BreadCrumbs from "@/components/BreadCrumbs";
    export default {
        name: "HeaderPanel",
        props: {
            currentRouteName: String,
        },
        components: {
          BreadCrumbs
        },
        data() {
            return {
              user: {
              username: "Chris Butalid"
            }
            }
        }
    }
</script>

<style scoped>

</style>