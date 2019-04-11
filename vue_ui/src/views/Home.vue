<template>
    <div class="nav">
        <br />
        <img
            src="@/assets/images/cabin.gif"
            alt="Welcome Home"
            class="cabin-size"
        />
        <ul>
            <li>
                <test-api />
            </li>
            <li>
                <a href="/react">React</a>
            </li>
        </ul>
    </div>
</template>

<script>
import TestApi from '@/components/TestApi.vue'

export default {
    name: `home`,
    components: {
        TestApi
    }
}
</script>
