"use client";

function Login() {
  return (
    <div class="bg-gray-100 flex justify-center items-center h-screen">
      <div class="w-1/2 h-screen hidden lg:block">
        <img
          src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
          alt="Placeholder Image"
          class="object-cover w-full h-full"
        />
      </div>

      <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form action="#" method="POST">
          <div class="mb-4">
            <label for="username" class="block text-gray-600">
              Mail
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>

          <div class="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              class="text-blue-500"
            />
            <label for="remember" class="text-gray-600 ml-2">
              Recuerdame
            </label>
          </div>

          <div class="mb-6 text-blue-500">
            <a href="#" class="hover:underline">
              Olvidaste tu password?
            </a>
          </div>

          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Ingresar
          </button>
        </form>

        <div class="mt-6 text-blue-500 text-center">
          <a href="#" class="hover:underline">
            Registrarme
          </a>
        </div>
        <div class = "grid grid-cols-3 gap-4">
          <div class = "grid-span-1 border-b-2 border-gray-300"></div>
          <div class = "grid-span-1 border-x-2"><p class = "text-center">o</p></div>
          <div class = "grid-span-1 border-b-2 border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
