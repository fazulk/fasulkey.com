<template>
    <div>
        {{ title }}<br />
        <input v-model="userSelected" placeholder="Query Name" />
        <br />
        {{ selectedData }}
        <ul>
            <li v-for="i in users" :key="i.name">{{ i.name }} - {{ i.id }}</li>
        </ul>
    </div>
</template>

<script>
import { users, userName } from '@/graphql/User.gql'

export default {
    name: `Playground`,
    data: () => ({
        title: `This is the playground`,
        userSelected: ``,
        selectedData: ``
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
    }
}
</script>
