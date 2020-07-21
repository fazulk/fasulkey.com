<template>
    <div>
        <div>
            <a @click="testApi">Test API</a>
            <p>
                {{ apiResponse }}
            </p>
        </div>
        <div>
            {{ title }}<br />
            <input v-model="userSelected" placeholder="Query Name" />
            <br />
            {{ selectedData }}
            <ul>
                <li v-for="i in users" :key="i.name">
                    {{ i.name }} - {{ i.id }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { users, userName } from '@/graphql/User.gql'

export default {
    name: `Playground`,
    data: () => ({
        title: `This is the playground`,
        userSelected: ``,
        selectedData: ``,
        apiResponse: ``
    }),
    apollo: {
        users: users,
        selectedData: {
            query: userName,
            variables() {
                return { name: this.userSelected }
            },
            update: data => data.userName
        }
    },
    methods: {
        async testApi() {
            let r = await this.$axios.get(`/api/test-service`)
            this.apiResponse = r.data
        }
    }
}
</script>
