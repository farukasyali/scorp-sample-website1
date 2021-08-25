<template>
    <div class="pt-3">
    <h1>{{ $t('contact-page-label') }}</h1>
    <div class="row justify-content-sm-center">
        <div class="col-sm-6 col-xs-12">
            <form v-on:submit="send($event)">
                <div class="mb-3">
                    <label  class="form-label">{{ $t('title-label') }}</label>
                    <input type="text" class="form-control" v-model="contact.title" >
                </div>
                <div class="mb-3">
                    <label  class="form-label">{{ $t('name-label') }}</label>
                    <input type="text" class="form-control" v-model="contact.name">
                </div>

                <div class="mb-3">
                    <label  class="form-label">{{ $t('email-label') }}</label>
                    <input type="e-mail" class="form-control" v-model="contact.email" :class="{'is-invalid' : checkEmail()}">
                </div>

                <div class="mb-3">
                    <label class="form-label">{{ $t('phone-number-label') }}</label>
                    <input type="text" class="form-control" v-model="contact.phoneNumber" :class="{'is-invalid' : checkPhoneNo()}">
                </div>

                <div class="mb-3">
                    <label class="form-label">{{ $t('country-label') }}</label>
                    <input type="text" class="form-control form-control-sm" v-model="countryFilterText" placeholder="filter...">
                    <select class="form-select" v-model="contact.country_code" size="4">
                        <option :value="item.id" v-for="item in filteredCountryList" :key="item.id" >{{ item.name }}</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label">{{ $t('text-label') }}</label>
                    <textarea type="text" class="form-control" v-model="contact.text"></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary float-end">{{ $t('send-btn-label') }}</button>
                </form>

        </div>
    </div>
</div>
</template>

<script>
    import { eventBus } from "../main";
    export default {
        data()
        {
            return{
                contact: {
                    title: "",
                    name: "",
                    email: "",
                    phoneNumber: "",
                    country_code: "TR",
                    text: ""
                },
                countryList : [
                    { id: "TR", name: this.$t("Turkey") },
                    { id: "US", name: this.$t("Usa") },
                    { id: "GB", name: this.$t("UK") },
                    { id: "DE", name: this.$t("Germany") },
                    { id: "SE", name: this.$t("Sweden") },
                    { id: "KE", name: this.$t("Kenya") },
                    { id: "BR", name: this.$t("Brazil") },
                    { id: "ZW", name: this.$t("Zimbabwe") }
                ],
                countryFilterText: "",
            }
        },

        methods:{
            checkEmail(){
                let mailformat=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
                if(this.contact.email == undefined || this.contact.email == '' || this.contact.email.match(mailformat) )
                    return false;
                else
                    return true;
            },

            checkPhoneNo()
            {
                let phoneRegex = /^(?=.*\d)[\d ]+$/;
                if(this.contact.phoneNumber == undefined || this.contact.phoneNumber == '' || this.contact.phoneNumber.match(phoneRegex))
                    return false;
                else
                    return true;
            },

            send(e){
                e.preventDefault();
                let json = JSON.stringify(Object.assign({}, this.contact))
                console.log(json);
                console.log(json);
                this.contact = {country_code: "TR"};
            }

        },

        mounted(){
            let user = this.$parent.$data.loggedUser;
            this.contact.name = user.name;
            this.contact.email = user.email;
            eventBus.$emit("pageChanged", 'contact');
        },

        created(){
            
            eventBus.$on("languageChanged", () => {
                this.countryList = [
                    { id: "TR", name: this.$t("Turkey") },
                    { id: "US", name: this.$t("Usa") },
                    { id: "GB", name: this.$t("UK") },
                    { id: "DE", name: this.$t("Germany") },
                    { id: "SE", name: this.$t("Sweden") },
                    { id: "KE", name: this.$t("Kenya") },
                    { id: "BR", name: this.$t("Brazil") },
                    { id: "ZW", name: this.$t("Zimbabwe") }
                ];
                this.countryFilterText = "";
            }),

            eventBus.$on("userLoggedin", (user) => {
                this.contact.name = user.name;
                this.contact.email = user.email;
            });
            
        },

        computed:{
            filteredCountryList()
            {
                if(this.countryFilterText == '')
                    return this.countryList;
                
                return this.countryList.filter(a=> a.name.toLowerCase().indexOf(this.countryFilterText.toLowerCase()) > -1);
            }
        }
    }
    
</script>
