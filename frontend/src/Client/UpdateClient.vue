<template>
  <header-panel :current-route-name="currentRouteName"></header-panel>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div class="px-4 sm:px-0">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      </div>

      <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">

        <client-data-fields :client-data="client" :key="childKey"></client-data-fields>

        <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    import HeaderPanel from "@/components/HeaderPanel";
    import ClientDataFields from "@/Client/ClientDataFields";

    export default {
        name: "UpdateClient",
        components: {
          // PhotoIcon,
          // UserCircleIcon,
          HeaderPanel,
          ClientDataFields,
          // ActionPanel,
      },
      data() {
          return {
            currentRouteName: "",
            client: {
                    image: null,
                    firstName: "Christopher",
                    middleName: "Aringo",
                    lastName: "Butalid",
                    email: "chris321d@gmail.com",
                    dateOfBirth: "",
                    gender: "male",
                    address: "123 Bulacan",
                    city: "Plaridel",
                    province: "Bulacan",
                    zip_code: "3000",
                    contact_number: "09485641245",
                    occupation: "IT Programmer"
                },
            childKey: 0,
          }
      },
      mounted() {
          this.reloadChild()
          this.currentRouteName = this.$route.name;
      },
      methods: {
          reloadChild() {
            this.childKey++; // Change the key to "reload" the child component
          },
      }
    }
</script>

<style scoped>

</style>