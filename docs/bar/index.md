# bar

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

[[toc]]

{{$page}}

{{1+1}}
::: v-pre
{{ console.log('vue') }}
:::

<div style="border:1px solid red;">div</div>

<script setup>
import { useData } from 'vitepress';
import VTitle from '../components/title/index.vue';
const { page } = useData()
</script>

<pre>{{ page.title }}</pre>

<VTitle/>
<vTitle/>
<v-Title/>
<v-title/>

::: v-pre
{{1+2}}
:::
