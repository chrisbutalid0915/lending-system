<template>
    <header-panel :current-route-name="currentRouteName"></header-panel>

    <div class="px-4 py-6">
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
                                 focus-visible:outline-indigo-600"
                          @click="openFilter"
                  >
                      <span>Filter by</span>
                  </button>
             </div>

        </div>



    </div>

    <TransitionRoot as="template" :show="open_filter">
    <Dialog as="div" class="relative z-10" @close="open_filter = false">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <form class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                  <div class="h-0 flex-1 overflow-y-auto">
                    <div class="bg-indigo-700 px-4 py-6 sm:px-6">
                      <div class="flex items-center justify-between">
                        <DialogTitle class="text-base font-semibold leading-6 text-white">Filter</DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button type="button" class="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
                            <span class="absolute -inset-2.5" />
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                    </div>


                    <div class="flex flex-1 flex-col justify-between">
                      <div class="divide-y divide-gray-200 px-4 sm:px-6">
                        <div class="space-y-6 pb-5 pt-6">
                          <div>
                            <label class="block text-md font-medium leading-6 text-gray-900">
                              <input name="filter_by" value="date_range" type="radio" class="h-4 w-4 border-black-300 text-indigo-600 focus:ring-indigo-600" />
                              Date Range
                            </label>
                            <div class="mt-2">
                                <label for="start-date"
                                       class="block text-sm font-medium text-gray-900">
                                    Start Date </label>
                                <input type="date"
                                       name="start-date"
                                       id="start-date"
                                       class="block
                                              w-75
                                              rounded-md
                                              border-black-300
                                              shadow-sm
                                              focus:border-indigo-500
                                              focus:ring-indigo-500
                                              sm:text-sm"
                                    />
                            </div>
                            <div class="mt-2">
                                <label for="end-date"
                                       class="block text-sm font-medium text-gray-900">
                                    End Date </label>
                                <input type="date"
                                       name="end-date"
                                       id="end-date"
                                       class="block
                                              w-75
                                              rounded-md
                                              border-black-300
                                              shadow-sm
                                              focus:border-indigo-500
                                              focus:ring-indigo-500
                                              sm:text-sm"/>
                            </div>
                          </div>

                          <div>
                            <label class="border-black-500 block text-md font-medium leading-6 text-gray-900">
                              <input name="filter_by" value="as_of" type="radio" class="h-4 w-4 border-black-300 text-indigo-600 focus:ring-indigo-600" />
                              As of
                            </label>
                            <div class="mt-2">
                                <input type="date"
                                       name="as-of-date"
                                       id="as-of-date"
                                       class="block
                                              w-75
                                              rounded-md
                                              border-black-300
                                              shadow-sm
                                              focus:border-indigo-500
                                              focus:ring-indigo-500
                                              sm:text-sm"
                                    />
                            </div>

                          </div>

                          <div>
                            <label class="border-black-500 block text-md font-medium leading-6 text-gray-900">
                              <input name="filter_by" value="loan_type" type="radio" class="h-4 w-4 border-black-300 text-indigo-600 focus:ring-indigo-600" />
                              Loan Type
                            </label>
                            <div class="mt-2">
                                <div class="col-span-full w-full">
                              <label class="font-semibold block text-sm font-medium leading-6 text-gray-900">Type</label>
                              <Combobox as="div" class="items-center gap-x-3" v-model="selectedLoanType">
                                <div class="relative mt-2">
                                  <ComboboxInput class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" @change="query = $event.target.value" :display-value="(borrower) => borrower?.name" />
                                  <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                  </ComboboxButton>

                                  <ComboboxOptions v-if="filteredLoanTypes.length > 0" class="absolute z-10 mt-1 max-h-100 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <ComboboxOption v-for="loanType in filteredLoanTypes" :key="loanType.id" :value="loanType" as="template" v-slot="{ active, selected }">
                                      <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                                        <div class="flex">

                                          <span :class="['ml-2 truncate text-gray-500', active ? 'text-indigo-200' : 'text-gray-500']">
                                            ID: {{ loanType.id }} |
                                          </span>
                                          <span :class="['truncate', selected && 'font-semibold']">
                                             &nbsp; {{ loanType.name }}
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
                            </div>

                          </div>

                        </div>


                      </div>
                    </div>
                  </div>
                  <div class="flex flex-shrink-0 justify-end px-4 py-4">
                    <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" @click="open_filter = false">Cancel</button>
                    <button type="submit" class="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply</button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <list-table :data="data"></list-table>

</template>

<script>
    import HeaderPanel from "@/components/HeaderPanel";
    import ListTable from "@/Loan/LoanAccounts/SummaryLoanReleases/ListTable";
    import {
      Combobox,
      ComboboxButton,
      ComboboxInput,
      ComboboxOption,
      ComboboxOptions,
    } from '@headlessui/vue'
    import {CheckIcon, ChevronUpDownIcon} from "@heroicons/vue/20/solid";
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    import {ref} from "vue";
    export default {
        name: "SummaryLoanReleases",
        props: {},
        components: {
            HeaderPanel,
            ListTable,
            Combobox,
            ComboboxButton,
            ComboboxInput,
            ComboboxOption,
            ComboboxOptions,
            CheckIcon,
            ChevronUpDownIcon,
            Dialog,
            DialogPanel,
            DialogTitle,
            TransitionChild,
            TransitionRoot
        },
        data() {
            return {
                currentRouteName: "",
                query: ref(''),
                borrowers: [
                    { name: 'Chris Butalid', id: 1 },
                    { name: 'kamile Butalid', id: 2 },
                    { name: 'Kenzo Makulet', id: 3 },
                    { name: 'Kassie Pasaway', id: 4 }
                ],
                selectedBorrower: '',
                loanTypes: [
                  { name: 'Type 1' , id: 1},
                  { name: 'Type 2' , id: 2},
                  { name: 'Type 3' , id: 3}
                ],
                selectedLoanType: '',
                open_filter: ref(false),
                data: [
                      {
                          name: 'Lindsay Walton',
                          title: 'Front-end Developer',
                          email: 'lindsay.walton@example.com',
                          role: 'Member'
                      }
                  ],
            }
        },
        mounted() {
            this.currentRouteName = this.$route.name;
        },
        methods: {
            openFilter() {
                if (this.open_filter === false) {
                    this.open_filter = true
                } else {
                    this.open_filter = false
                }
            }
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
          filteredLoanTypes:function () {
            return this.query.value === ''
            ? this.loanTypes
            : this.loanTypes.filter(loanType => {
              return loanType.name.toLowerCase().includes(this.query.toLowerCase())
            }).sort(res => {
              return -1;
            });
          },
        }
    }
</script>

<style scoped>

</style>