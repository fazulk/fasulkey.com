<template>
    <div>
        <div v-if="$apollo.loading" class="container">
            <semipolar-spinner
                class="center-loader"
                :animation-duration="2000"
                :size="65"
                color="white"
            />
        </div>

        <transition name="fade">
            <div v-if="!$apollo.loading">
                <div class="heading">
                    {{ resume.name }}
                </div>
                <div class="contact">
                    <ul>
                        <li>{{ resume.location }}</li
                        ><br />
                        <li>
                            <a :href="'mailto:' + resume.email">{{
                                resume.email
                            }}</a>
                        </li>
                        <li>
                            <a :href="resume.url">{{
                                slimUrl({ url: resume.url })
                            }}</a
                            ><br />

                            <a :href="resume.github">{{
                                slimUrl({ url: resume.github })
                            }}</a>
                        </li>
                        <br />
                        <!-- <li>
                            <a
                                href="/assets/docs/fasulkey-resume.pdf"
                                target="_blank"
                                >download pdf</a
                            >
                        </li> -->
                    </ul>
                </div>
                <div class="sub-heading">Objective:</div>
                <div class="content">{{ resume.objective }}</div>
                <div class="sub-heading">Experience:</div>
                <div
                    v-for="(e, i) in resume.experience"
                    :key="i"
                    class="content"
                >
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
        </transition>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import SemipolarSpinner from 'epic-spinners/src/components/lib/SemipolarSpinner'
export default {
    name: `Resume`,

    components: {
        SemipolarSpinner
    },

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

<style lang="scss"></style>
