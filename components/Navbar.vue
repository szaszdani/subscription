<template>
    <nav class="bg-slate-100 border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Subscription Demo</span>
            
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex space-x-10">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/subscription">Subscribe</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>