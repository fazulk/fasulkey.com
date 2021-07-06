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
        </ul>
    </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
    name: `home`,
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
    }
}
</script>
