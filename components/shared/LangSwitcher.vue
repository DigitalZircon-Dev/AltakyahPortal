<template>
    <li>
        <a class="nav-links" @click="lang" v-show="!isArabic" link>
            {{languageLabel.Arabic.Title}}
        </a>
        <a class="nav-links" @click="lang" v-show="isArabic" link>
            {{languageLabel.English.Title}}
        </a>
    </li>
</template>
<script>
export default {
    data(){
        return {
            isArabic: false,
            languageLabel: {
                Arabic: {
                Title:'العربية',
                Lang:'ar'
                },
                English:{
                Title: 'English',
                Lang: 'en'
                }
            },
        }
    },
    methods:{
        lang() {
            console.log(this.$vuetify.lang.current);
            console.log(this.isArabic);
            this.isArabic = !this.isArabic;
            console.log(this.isArabic); 
            if(this.isArabic){
                this.$vuetify.lang.current ='ar' ;
                this.$vuetify.rtl = true;
            }else {
                this.$vuetify.lang.current ='en';
                this.$vuetify.rtl = false;
            }
            console.log(this.$vuetify.lang.current);
        }
    },
}
</script>