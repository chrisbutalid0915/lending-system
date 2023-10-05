<template>
  <div class="flex min-h-full flex-1">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <ImageViewer image-size="300px"
                       image-alt=""
                       image-class=""
                       image-url="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"

          />
<!--          <img class="h-10 flex w-full"-->
<!--               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"-->
<!--               alt="" />-->
          <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>

        </div>

        <div class="mt-10">
          <div>
            <form @submit.prevent="authenticate" class="space-y-6">
              <div>
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div class="mt-2">
                  <input id="username"
                         name="username"
                         type="text"
                         autocomplete="email"
                         required=""
                         placeholder="username"
                         v-model="username"
                         class="bg-none block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label for="password"
                       class="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div class="mt-2">
                  <input id="password"
                         name="password"
                         type="password"
                         autocomplete="current-password"
                         required=""
                         placeholder="password"
                         v-model="password"
                         class="bg-none block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Sign in
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-cover"
           src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
           alt="" />
    </div>

  </div>
</template>

<script>
    import axios from 'axios';
    import router from "@/router";
    import VueRouter from 'vue-router';
    import ImageViewer from "@/components/ImageViewer";
    export default {
        name: "LoginFrom",
        components: {
          ImageViewer
        },
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            async authenticate() {

                try {
                    const response = await axios.post('/api/v1/login/', {
                    username: this.username,
                    password: this.password,
                    });
                    if (response.status === 200) {
                        const token = response.data.token;
                        localStorage.setItem('authToken', token);
                        this.$store.commit("login")

                        // router.push({ path: '/dashboard' });
                        window.location.reload();
                        //
                    }
                } catch (error) {
                    if (error.response.status === 400) {
                        console.log("Invalid Credentials")
                        this.$store.commit("logout")
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>