<template>
    <div>
        <ul>
            <li>
                <a @click="testApi">Test API</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: `TestApi`,
    methods: {
        async testApi() {
            let res = await this.$axios.get(`/test`)
            if (res) alert(`API Up`)
        }
    }
}
</script>
