# real-world-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Touring Vue Router
## How do we read query parameters off the URL

`How do we get access to page inside our component http://localhost:8080/events?page=4`

- From the template `{{ $route.query.page }}`
- From the component code
    -- `const page = computed(() => parseInt(route.query.page) || 1)`
## What if we wanted page to be part of the URL

`How do we get access to page inside our component http://localhost:8080/page=4`

- From the route `{path: '/events/:page', component: Events, props: true},` send in our route parameters as component props
- From the template :
    --- `defineProps(['page'])`
    -- {{ page }}

## Can we configure a component from the router?

- Props Object Mode `props: { showExtra: true }` from the route file
- From the template `defineProps(['showExtra'])` && `<div v-if="showExtra">Extra stuff</div>`

## How can we transform query parameters?

`http://localhost:8080/?e=true` we want to send `showExtra=true` to our component

- From the route file `props: (route) => ({ showExtra: route.query.e })`
- From the template `defineProps(['showExtra'])`

## Building pagination

- Modify the EventService API call ta take `perPage` and `page`
- Parse and set the current `page` from the router using Function Mode
- Modify EventList.vue to pass on `page` number to EventService API
- Add Pagination links to the EventList Template
- Only show the Next page link when there is a Next page
- Improve the pagination styling