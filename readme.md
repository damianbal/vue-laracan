# VueLaracan

Access Laravel's Policies using [laracan](https://github.com/damianbal/laracan) in Vue components.

## Getting Started

You can access method 'can' in any Vue component, but make sure that Authorization token is sent so user is signed in.

Vue Component Example: 
```js
async mounted() {
    this.can_edit_article = await this.can('Article', 'edit', this.article_id)
}
```

### Installing

Note: Before you use this plugin in Vue project, make sure that you have installed [this](https://github.com/damianbal/laracan) package in your Laravel project.

```sh
npm i vue-laracan
```

```js
Vue.use(Laracan, {
    laravelBaseURL: "http://laravel-app.com" // url to your laravel app 
})
```
