<template>
    <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-left">

            <div class="col-span-full">
              <label class="font-semibold block text-sm font-medium leading-6 text-gray-900">Photo</label>
              <div class="mt-2 flex items-center gap-x-3">
                <img class="inline-block h-24 w-24 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <button type="button"
                        class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="first-name"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >First name</label>
              <div class="mt-2">
                <input type="text"
                       name="first-name"
                       id="first-name"
                       autocomplete="given-name"
                       v-model="client.firstName"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="last-name"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >Last name</label>
              <div class="mt-2">
                <input type="text"
                       name="last-name"
                       id="last-name"
                       autocomplete="family-name"
                       v-model="client.lastName"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="middle-name"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >Middle name</label>
              <div class="mt-2">
                <input type="text"
                       name="middle-name"
                       id="middle-name"
                       autocomplete="family-name"
                       v-model="client.middleName"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="email"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >Email address</label>
              <div class="mt-2">
                <input id="email"
                       name="email"
                       type="email"
                       autocomplete="email"
                       v-model="client.email"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >Date of Birth</label>
              <VueDatePicker v-model="client.dateOfBirth"></VueDatePicker>
            </div>

            <div class="sm:col-span-4">
              <label for="gender"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >Gender</label>
              <div class="mt-2">
                <select id="gender"
                        name="gender"
                        autocomplete="gender"
                        v-model="client.gender"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <!-- eslint-disable-next-line-->
                  <option v-for="data in gender"
                          v-bind:value="data.value">
                    {{ data.text }}
                  </option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="country"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >Country</label>
              <div class="mt-2">
                <select id="country"
                        name="country"
                        autocomplete="country-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>Philippines</option>
                </select>
              </div>
            </div>

            <div class="col-span-full">
              <label for="street-address"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >Street address</label>
              <div class="mt-2">
                <input type="text"
                       name="street-address"
                       id="street-address"
                       autocomplete="street-address"
                       v-model="client.address"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label for="city"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >Municipality / City</label>
              <div class="mt-2">
                <input type="text"
                       name="city"
                       id="city"
                       autocomplete="address-level2"
                       v-model="client.city"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="region"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >State / Province</label>
              <div class="mt-2">
                <input type="text"
                       name="region"
                       id="region"
                       autocomplete="address-level1"
                       v-model="client.province"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="postal-code"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >ZIP / Postal code</label>
              <div class="mt-2">
                <input type="text"
                       name="postal-code"
                       id="postal-code"
                       autocomplete="postal-code"
                       v-model="client.zip_code"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="contact-number"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >Contact Number</label>
              <div class="mt-2">
                <input type="text"
                       name="contact-number"
                       id="contact-number"
                       autocomplete="given-name"
                       v-model="client.contact_number"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="occupation"
                     class="font-semibold block text-sm font-medium leading-6 text-gray-900"
              >Occupation</label>
              <div class="mt-2">
                <input type="text"
                       name="occupation"
                       id="occupation"
                       autocomplete="occupation"
                       v-model="client.occupation"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

          </div>
        </div>
</template>

<script>
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    export default {
        name: "ClientDataFields",
        props: {
          clientData: Object
        },
        components: { VueDatePicker },
        data() {
            return {
                dateOfBirth: null,
                client: this.clientData,
                gender: [
                  {text: 'Select' , value: ''},
                  {text: 'Male', value: 'male'},
                  {text: 'Female', value: 'female'},
                ]
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>