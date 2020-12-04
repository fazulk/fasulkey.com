<template>
    <div>
        <div class="heading">
            {{ name }}
        </div>
        <div class="contact">
            <ul>
                <li>{{ resumeBasicInfo.location }}</li>
                <li>
                    <a :href="resumeBasicInfo.email">{{
                        resumeBasicInfo.email
                    }}</a>
                </li>
                <li>
                    <a :href="resumeBasicInfo.url">{{ slimUrl }}</a>
                </li>
            </ul>
        </div>
        <div class="sub-heading">Objective:</div>
        <div class="content">{{ resumeBasicInfo.objective }}</div>
        <div class="sub-heading">Experience:</div>
        <div v-for="j in experience" :key="j.name" class="content">
            <span class="job-title stronger">{{ j.details.name }}</span
            ><br />
            {{ j.details.date_location }}<br />
            <span class="stronger">{{ j.details.title }}</span>
            <ul>
                <li v-for="b in j.bullets" :key="b">
                    {{ b }}
                </li>
            </ul>
        </div>
        <div class="sub-heading">Languages, OS, and Programs:</div>
        <div class="languages">
            <ul>
                <li v-for="l in languages.bulk" :key="l">
                    {{ l }}
                </li>
            </ul>
        </div>
        <div class="sub-heading">Education:</div>
        <div class="languages">
            <ul>
                <li v-for="e in education" :key="e.school" class="top-padding">
                    <span class="job-title stronger">{{ e.school }}</span
                    ><br />
                    {{ e.location }}<br />
                    <span class="stronger">{{ e.degree }}</span>
                </li>
            </ul>
        </div>
        <div class="sub-heading">Affiliations:</div>
        <div class="languages">
            <ul>
                <li
                    v-for="e in affiliations"
                    :key="e.school"
                    class="top-padding"
                >
                    <span class="job-title stronger">{{ e.school }}</span
                    ><br />
                    <span class="stronger">{{ e.degree }}</span>
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
        resumeBasicInfo: {
            query: gql`
                query {
                    resumeHistory(resumeType: "basicInfo") {
                        location
                        objective
                        email
                        url
                    }
                }
            `,
            update: data => data.resumeHistory[0] || []
        }
    },
    data() {
        return {
            resumeBasicInfo: {},
            name: `Jeff Fasulkey`,
            address: [`California`],
            links: [
                { action: `mailto:`, link: `jfasulkey@gmail.com` },
                { action: `http://`, link: `github.com/fazulk` }
            ],
            affiliations: [
                {
                    school: `Boy Scouts of America`,
                    degree: `Eagle Scout`
                }
            ],
            education: [
                {
                    school: `Diablo Valley College`,
                    location: `Pleasant Hill, CA`,
                    degree: `General Studies`
                },
                {
                    school: `Dublin High School`,
                    location: `Dublin, CA`,
                    degree: `General Ed.`
                }
            ],
            languages: {
                bulk: [
                    `Javascript, ES6+, Node.js, MongoDB, Oracle, SQL, Yarn, NPM`,
                    `Google Cloud Project, Cloud Functions, SSR, Docker, Kubernetes`,
                    `Effeciant, scalable application architecture & design patterns`,
                    `Vue.js, HTML5,	CSS, SASS, Webpack, Babel, JSON, Application Security`,
                    `Excel, Photoshop, Illustrator, Dreamweaver, Flash`,
                    `OSX, Windows 7, 10`
                ],
                minimal: `Minimal work with: Python, React, GraphQL, and more to come!
`
            },
            objective: `To apply my dynamic skill-set in a workplace that thrives on providing the highest quality products and service while also generating an excellent user experience.`,
            experience: [
                {
                    details: {
                        name: `Getac`,
                        date_location: `Irvine CA February 2017 - Present`,
                        title: `Software Developer / IT Engineer`
                    },
                    bullets: [
                        `Responsible for creating a scalable user application with CRUD capabilities to be used for data processing and granular data analysis.`,
                        `Establish guidelines and schema for scalable database architecture using MongoDB.`,
                        `Design and develop server architecture for NODE.js server which includes ability to process REST API calls as well as serving UI (SPA application and SSR).`,
                        `Establish and implement local security authorization and authentication strategy utilizing JWT.`,
                        `Develop complex Mongo Aggregation Pipelines to analyze thousands of data points as well as basic database queries.`,
                        `Design and developed frontend UI using Vue.js to create a interactive fluid user experience.`,
                        `Deploy all production and dev environments using Gcloud and Docker`,
                        `Established code patterns within the Server and UI architecture.`,
                        `Utilize CSS3 and SASS for styling.`,
                        `Worked with templating engines (ejs, pug) to display content dynamically.`,
                        `Utilize git & github  to maintain code repositories and their respective versions.`,
                        `Maintain code readability with comments and readmes.`,
                        `Communicate with internal management to establish clear goals and expectations.`,
                        `Responsible for setting and hitting all expected time deadlines while taking into account any unforeseen time sinks.`
                    ]
                },
                {
                    details: {
                        name: `Lucky Strike Entertainment`,
                        date_location: `Orange CA 2003 - February 2017`,
                        title: `Assistant General Manager`
                    },
                    bullets: [
                        `Program schedules for 55+ employees to support between 20 -70 private events each week, while also meeting base business needs.`,
                        `Improved productivity and eliminated redundancies by instituting new technical configurations and ways of conducting day to day operations.`,
                        `Analyze and forecast P/L statements for current and future business/industry trends.`,
                        `Lead & trained mgmt teams across CA on reducing COGS, scheduling, and inventory planning.`,
                        `Streamlined our database of employee payroll utlizing excel and vbscript.`,
                        `Mentored unit managers, shift supervisors, and general staff to promote growth within.`,
                        `Demonstrated conflict management which may include any customer disputes or employee conflicts.`
                    ]
                },
                {
                    details: {
                        name: `Inventures`,
                        date_location: `San Ramon, CA 2000 - 2002`,
                        title: `Full Stack Developer / Designer`
                    },
                    bullets: [
                        `Develop and design fully structured dynamic web sites for new clients and existing clients, while utilizing ColdFusion, HTML, CSS, & Flash. `,
                        `Designed and implemented backend data structure using mysql to integrate with cold fusion.`,
                        `Designed, Prototyped, and Developed all UI and UX for all client sites. `,
                        `Responsible for debugging and following through to ensure user experience was fluid.`,
                        `Responsible for designing and creating full identity packages for several clients. This would include Logos, Business cards, Flyers, etc.`,
                        `Establish and develop CSS guidelines tailor made to specific design concepts. `,
                        `Stay up to date on new technologies and security measures.`
                    ]
                },
                {
                    details: {
                        name: `Interquest Communications/ Darwin Networks`,
                        date_location: `Walnut Creek, CA February 2000 - August 2000`,
                        title: `Front End Developer / Designer`
                    },
                    bullets: [
                        `Developed fully structured dynamic sites for various hospitality and multi-dwelling units.`,
                        `Supported maintenance of content in over 500 sites, while performing database administration.`,
                        `Collaborated with other designer and developers for the implementation of a technical reference desk. `
                    ]
                }
            ]
        }
    },
    computed: {
        slimUrl() {
            return (`` + this.resumeBasicInfo.url).replace(`https://`, ``)
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
