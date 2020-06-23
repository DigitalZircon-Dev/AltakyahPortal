<template>
    <v-card class="mx-auto">
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="150" class="mr-4">
                            <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                height="200px">
                            </v-img>
                        </v-avatar>
                    </v-flex>
                    <v-text-field
                        v-model="form.firstName"
                        label="FirstName"></v-text-field>
                    <v-text-field
                        v-model="form.lastName"
                        label="Last Name"></v-text-field>
                    <v-text-field
                        v-model="form.contactEmail"
                        label="Email Address"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" :loading="loading" @click.native="update">
                        <v-icon left dark></v-icon>Save Changes
                    </v-btn>
                </v-card-actions>
            </v-card>
</template>

<script>
    export default {
        pageTitle: 'My Profile',
        data () {
            return {
                loading: false,
                form: {
                    firstName: 'John',
                    lastName: 'Doe',
                    contactEmail: 'john@doe.com',
                    avatar: 'MALE_CAUCASIAN_BLOND_BEARD'
                },
                showAvatarPicker: false
            }
        },

        methods: {
            openAvatarPicker () {
                this.showAvatarPicker = true
            },

            selectAvatar (avatar) {
                this.form.avatar = avatar
            }
        }
    }
</script>
