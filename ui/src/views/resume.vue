<template>
    <div>
        <div class="heading">
            {{ resume.name }}
        </div>
        <div class="contact">
            <ul>
                <li>{{ resume.location }}</li
                ><br />
                <li>
                    <a :href="'mailto:' + resume.email">{{ resume.email }}</a>
                </li>
                <li>
                    <a :href="resume.url">{{ slimUrl({ url: resume.url }) }}</a
                    ><br />

                    <a :href="resume.github">{{
                        slimUrl({ url: resume.github })
                    }}</a>
                </li>
            </ul>
        </div>
        <div class="sub-heading">Objective:</div>
        <div class="content">{{ resume.objective }}</div>
        <div class="sub-heading">Experience:</div>
        <div v-for="(e, i) in resume.experience" :key="i" class="content">
            <span class="job-title stronger">{{ e.title }}</span
            ><br />
            {{ e.location }} {{ e.startDate }} -
            {{ e.endDate ? `${e.endDate}` : 'Present' }} <br />
            <span class="stronger">{{ e.subTitle }}</span>
            <ul>
                <li v-for="(p, pi) in e.points" :key="pi">
                    {{ p }}
                </li>
            </ul>
        </div>
        <div class="sub-heading">Languages, OS, and Programs:</div>
        <div class="languages">
            <ul>
                <li v-for="(l, i) in resume.languages" :key="i">
                    {{ l }}
                </li>
            </ul>
        </div>
        <div class="sub-heading">Education:</div>
        <div class="languages">
            <ul>
                <li
                    v-for="(e, i) in resume.education"
                    :key="i"
                    class="top-padding"
                >
                    <span class="job-title stronger">{{ e.title }}</span
                    ><br />
                    {{ e.location }}<br />
                    <span class="stronger">{{ e.subTitle }}</span>
                </li>
            </ul>
        </div>

        <div class="sub-heading">Affiliations:</div>
        <div class="languages">
            <ul>
                <li
                    v-for="(a, i) in resume.affiliations"
                    :key="i"
                    class="top-padding"
                >
                    <span class="job-title stronger">{{ a.title }}</span
                    ><br />
                    <span class="stronger">{{ a.subTitle }}</span>
                </li>
            </ul>
        </div>
        <div class="footer"></div>
    </div>
</template>

<style>
html,
body {
    margin: 0;
    padding: 0;
}
</style>

<script>
import gql from 'graphql-tag'
export default {
    name: `Resume`,
    apollo: {
        resume: {
            query: gql`
                query Resume {
                    resume {
                        name
                        languages
                        github
                        location
                        objective
                        email
                        url
                        affiliations {
                            title
                            subTitle
                        }
                        experience {
                            title
                            subTitle
                            location
                            startDate
                            points
                            endDate
                        }
                        education {
                            title
                            subTitle
                            location
                        }
                    }
                }
            `
        }
    },
    data() {
        return {
            resume: {}
        }
    },
    methods: {
        slimUrl({ url }) {
            return (`` + url).replace(`https://`, ``)
        }
    }
}
</script>

<style lang="scss" scope>
a {
    color: black;
}

.footer {
    padding-bottom: 100px;
}

.heading {
    padding: 20px;
    margin: auto;
    background-color: orange;
    font: 3em Georgia, 'Times New Roman', serif;
    font-weight: 400;
    text-align: left;
}

.content {
    line-height: 1.5em;
    padding-top: 25px;
    padding-right: 50px;
    padding-left: 50px;
    font-family: Georgia, 'Times New Roman', serif;
    text-align: left;
}

.sub-heading {
    padding-top: 25px;
    padding-left: 25px;
    font: 1.4em Georgia, 'Times New Roman', serif;
    text-align: left;
}

.top-padding {
    padding-top: 15px;
}

.job-title {
    font-size: 1.2em;
}

.stronger {
    font-weight: bold;
}

.languages {
    line-height: 1.5em;
    padding-right: 50px;
    padding-left: 50px;
    font-family: Georgia, 'Times New Roman', serif;
    text-align: left;
    ul {
        list-style-type: none;
        padding-left: 25px;
    }
}

.contact {
    margin: auto;
    font: 1.2em Georgia, 'Times New Roman', serif;
    text-align: left;
    ul {
        list-style-type: none;
        padding-left: 25px;
    }
}
</style>
