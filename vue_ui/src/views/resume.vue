<template>
    <div>
        <div class="heading">
            {{ name }}
        </div>
        <div class="content">
            <ul>
                <li v-for="i in address" :key="i">{{ i }}</li>
            </ul>
            <ul>
                <li v-for="i in links" :key="i.link">
                    <a :href="i.action + i.link">{{ i.link }}</a>
                </li>
            </ul>
            <div
                v-for="t in detailed_content"
                :key="t.heading"
                class="detailed-content"
            >
                <h4>{{ t.heading }}</h4>
                {{ t.content }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: `Resume`,
    data() {
        return {
            name: `Jeff Fasulkey`,
            address: [`Orange County, CA`],
            links: [
                { action: `mailto:`, link: `jfasulkey@gmail.com` },
                { action: `http://`, link: `github.com/fazulk` }
            ],
            detailed_content: [
                {
                    heading: `Objective`,
                    content: `To apply my dynamic skill-set in a workplace that thrives on providing the highest quality products and service while also generating an excellent user experience.`
                }
            ]
        }
    }
}
</script>

<style lang="scss" scope>
.heading {
    padding: 20px;
    margin: auto;
    background-color: orange;
    font: 3em Georgia, 'Times New Roman', serif;
    font-weight: 400;
    text-align: left;
}

.detailed-content {
    padding-left: 25px;
    font: 1em Georgia, 'Times New Roman', serif;
    text-align: left;
}

.content {
    margin: auto;
    font: 1em Georgia, 'Times New Roman', serif;
    text-align: left;
    ul {
        list-style-type: none;
        padding-left: 25px;
    }
}
</style>
