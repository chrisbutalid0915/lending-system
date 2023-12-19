<template>
    <header-panel :current-route-name="currentRouteName"></header-panel>
<!--    <action-panel></action-panel>-->
    <div class="px-4 py-6 sm:p-8">
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-left col-lg-2" style="display: block ruby">

            <div class="col-span-full w-full">
              <label class="font-semibold block text-sm font-medium leading-6 text-gray-900">Borrower</label>
              <Combobox as="div" class="items-center gap-x-3" v-model="selectedBorrower">
                <div class="relative mt-2">
                  <ComboboxInput class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" @change="query = $event.target.value" :display-value="(borrower) => borrower?.name" />
                  <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </ComboboxButton>

                  <ComboboxOptions v-if="filteredBorrowers.length > 0" class="absolute z-10 mt-1 max-h-100 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <ComboboxOption v-for="person in filteredBorrowers" :key="person.id" :value="person" as="template" v-slot="{ active, selected }">
                      <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                        <div class="flex">

                          <span :class="['ml-2 truncate text-gray-500', active ? 'text-indigo-200' : 'text-gray-500']">
                            ID: {{ person.id }} |
                          </span>
                          <span :class="['truncate', selected && 'font-semibold']">
                             &nbsp; {{ person.name }}
                          </span>
                        </div>

                        <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ComboboxOption>
                  </ComboboxOptions>
                </div>
              </Combobox>


            </div>


        <div class="mt-3 sm:ml-4 sm:mt-0">
          <button type="button"
                  class="inline-flex
                         items-center
                         rounded-md
                         bg-indigo-600
                         px-3
                         py-2
                         text-sm
                         font-semibold
                         text-white
                         shadow-sm
                         hover:bg-indigo-500
                         focus-visible:outline
                         focus-visible:outline-2
                         focus-visible:outline-offset-2
                         focus-visible:outline-indigo-600">
                  Print
<!--              <router-link :to="print_button">New Loan</router-link>-->
          </button>
        </div>

        </div>

    </div>



     <list-table :data="data"></list-table>

</template>

<script>
    import ListTable from "@/Loan/LoanApplication/ListTable";
    import HeaderPanel from "@/components/HeaderPanel";
    // import ActionPanel from "@/components/ActionPanel";
     import { computed, ref } from 'vue'
    // import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
    import {
      Combobox,
      ComboboxButton,
      ComboboxInput,
      ComboboxOption,
      ComboboxOptions,
    } from '@headlessui/vue'
    export default {
        name: "LoanAmortizationn",
        props: {
            loanData: Object
        },
        components: {
            HeaderPanel,
            // ActionPanel
            CheckIcon,
            ChevronUpDownIcon,
            Combobox,
            ComboboxButton,
            ComboboxInput,
            ComboboxOption,
            ComboboxOptions,
            ListTable
        },
        data() {
            return {
                currentRouteName: "",
                query: ref(''),
                selectedBorrower: { name: 'Please Select', id: "" },
                borrowers: [
                    { name: 'Chris Butalid', id: 1 },
                    { name: 'kamile Butalid', id: 2 },
                    { name: 'Kenzo Makulet', id: 3 },
                    { name: 'Kassie Pasaway', id: 4 }
                ],
                data: [
                    {
                        name: 'Lindsay Walton',
                        title: 'Front-end Developer',
                        email: 'lindsay.walton@example.com',
                        role: 'Member'
                    }
                ],
                print_button: '/test',
            }
        },
        mounted() {
            this.currentRouteName = this.$route.name;
        },
        computed: {
            filteredBorrowers:function () {
            return this.query.value === ''
            ? this.borrowers
            : this.borrowers.filter(borrower => {
              return borrower.name.toLowerCase().includes(this.query.toLowerCase())
            }).sort(res => {
              return -1;
            });
          },
        }
    }
</script>

<style scoped>

</style>