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
                <a href="https://github.com/fazulk">GitHub</a>
            </li>
            <li>
                <router-link to="/resume">Resume</router-link>
            </li>
            <!-- <li>
                <a href="/react">React</a>
            </li> -->
        </ul>
    </div>
</template>

<script>
export default {
    name: `home`
}
</script>
