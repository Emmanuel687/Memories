import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([
    {
      "user_id": 1,
      "id": 101,
      "title": "First Post",
      "description": "Description for the first post.",
      "tags": [
        {"id": 1, "label": "TagA"},
        {"id": 2, "label": "TagB"}
      ],
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbeach&psig=AOvVaw2Au2MD4wstB6aCLuwLStyo&ust=1700915489890000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKCu3Y3S3IIDFQAAAAAdAAAAABAE"
    },
    // {
    //   "user_id": 2,
    //   "id": 102,
    //   "title": "Second Post",
    //   "description": "Description for the second post.",
    //   "tags": [
    //     {"id": 3, "label": "TagC"},
    //     {"id": 4, "label": "TagD"}
    //   ],
    //   "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbeach&psig=AOvVaw2Au2MD4wstB6aCLuwLStyo&ust=1700915489890000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKCu3Y3S3IIDFQAAAAAdAAAAABAE"
    // },
    // {
    //   "user_id": 3,
    //   "id": 103,
    //   "title": "Third Post",
    //   "description": "Description for the third post.",
    //   "tags": [
    //     {"id": 5, "label": "TagE"},
    //     {"id": 6, "label": "TagF"}
    //   ],
    //   "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbeach&psig=AOvVaw2Au2MD4wstB6aCLuwLStyo&ust=1700915489890000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKCu3Y3S3IIDFQAAAAAdAAAAABAE"
    // },
    // {
    //   "user_id": 4,
    //   "id": 104,
    //   "title": "Fourth Post",
    //   "description": "Description for the fourth post.",
    //   "tags": [
    //     {"id": 7, "label": "TagG"},
    //     {"id": 8, "label": "TagH"}
    //   ],
    //   "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbeach&psig=AOvVaw2Au2MD4wstB6aCLuwLStyo&ust=1700915489890000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKCu3Y3S3IIDFQAAAAAdAAAAABAE"
    // },
    // {
    //   "user_id": 5,
    //   "id": 105,
    //   "title": "Fifth Post",
    //   "description": "Description for the fifth post.",
    //   "tags": [
    //     {"id": 9, "label": "TagI"},
    //     {"id": 10, "label": "TagJ"}
    //   ],
    //   "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbeach&psig=AOvVaw2Au2MD4wstB6aCLuwLStyo&ust=1700915489890000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKCu3Y3S3IIDFQAAAAAdAAAAABAE"
    // },
    // {
    //   "user_id": 6,
    //   "id": 106,
    //   "title": "Sixth Post",
    //   "description": "Description for the sixth post.",
    //   "tags": [
    //     {"id": 11, "label": "TagK"},
    //     {"id": 12, "label": "TagL"}
    //   ],
    //   "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbeach&psig=AOvVaw2Au2MD4wstB6aCLuwLStyo&ust=1700915489890000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKCu3Y3S3IIDFQAAAAAdAAAAABAE"
    // },
    // {
    //   "user_id": 7,
    //   "id": 107,
    //   "title": "Seventh Post",
    //   "description": "Description for the seventh post.",
    //   "tags": [
    //     {"id": 13, "label": "TagM"},
    //     {"id": 14, "label": "TagN"}
    //   ],
    //   "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbeach&psig=AOvVaw2Au2MD4wstB6aCLuwLStyo&ust=1700915489890000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKCu3Y3S3IIDFQAAAAAdAAAAABAE"
    // },
    // {
    //   "user_id": 8,
    //   "id": 108,
    //   "title": "Eighth Post",
    //   "description": "Description for the eighth post.",
    //   "tags": [
    //     {"id": 15, "label": "TagO"},
    //     {"id": 16, "label": "TagP"}
    //   ],
    //   "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbeach&psig=AOvVaw2Au2MD4wstB6aCLuwLStyo&ust=1700915489890000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKCu3Y3S3IIDFQAAAAAdAAAAABAE"
    // },
    // {
    //   "user_id": 9,
    //   "id": 109,
    //   "title": "Ninth Post",
    //   "description": "Description for the ninth post.",
    //   "tags": [
    //     {"id": 17, "label": "TagQ"},
    //     {"id": 18, "label": "TagR"}
    //   ],
    //   "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbeach&psig=AOvVaw2Au2MD4wstB6aCLuwLStyo&ust=1700915489890000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKCu3Y3S3IIDFQAAAAAdAAAAABAE"
    // },
    // {
    //   "user_id": 10,
    //   "id": 110,
    //   "title": "Tenth Post",
    //   "description": "Description for the tenth post.",
    //   "tags": [
    //     {"id": 19, "label": "TagS"},
    //     {"id": 20, "label": "TagT"}
    //   ],
    //   "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbeach&psig=AOvVaw2Au2MD4wstB6aCLuwLStyo&ust=1700915489890000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKCu3Y3S3IIDFQAAAAAdAAAAABAE"
    // }
  ]
  )
  

  return { posts }
})
