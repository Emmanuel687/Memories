<template>
  <div class="grid grid-cols-3 gap-4 w-4/5">
    <div class="max-w-md w-full lg:max-w-md lg:flex" v-for="post in posts" :key="post.id">
      <img
        :src="post.image"
        class="h-40 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      />
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">
            {{ post.title }}
          </div>
          <p class="text-gray-700 text-base">
            {{ post.description }}
          </p>
          <div class="flex flex-row gap-3">
            <p class="text-orange-400 text-sm" v-for="tag in post.tags" :key="tag.id">
              #{{ tag.label }}
            </p>
          </div>
        </div>
        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            :src="post.image"
            alt="Avatar of Jonathan Joestar"
          />
          <div class="text-sm">
            <p class="text-gray-900 leading-none">Jonathan Joestar</p>
            <p class="text-gray-600">Aug 18</p>
          </div>
        </div>
        <!-- like, share, comment -->
        <br />
        <div class="flex justify-between">
          <button class="flex items-center space-x-2 px-2">
            <svg
              class="h-5 w-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              ></path>
            </svg>
          </button>

          <button class="flex items-center space-x-2 px-2">
            <ShareIcon class="h-5 w-5" />
          </button>

          <button class="flex items-center space-x-2 px-2">
            <ChatBubbleOvalLeftIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { usePostsStore } from '../stores/posts'
import { ChatBubbleOvalLeftIcon, ShareIcon } from '@heroicons/vue/24/outline'

const postsList = usePostsStore()

const { posts } = storeToRefs(postsList)

console.log(posts.value[0])
</script>
