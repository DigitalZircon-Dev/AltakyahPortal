<template>
    <v-container fluid>
        <v-layout column>
            <Profile-Data/>
        </v-layout>
    </v-container>
</template>

<script>
    import ProfileData from '~/components/userProfile/ProfileData'

    export default {
        components: {
            ProfileData
        }
    }
</script>