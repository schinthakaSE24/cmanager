<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Edit Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, recusandae. Vel odit debitis expedita, provident officia ex molestiae reprehenderit molestias cum quasi vero vitae a consequatur fugit placeat repudiandae commodi.</p>

            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <form @submit.prevent="updateSubmit()">
                    <div class="mb-2">
                        <input type="text" v-model="contact.name" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.photo" class="form-control" placeholder="Photo URL">
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.mobile" class="form-control" placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.company" class="form-control" placeholder="Company">
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.title" class="form-control" placeholder="Title">
                    </div>
                    <div class="mb-2">
                        <select class="form-control" v-model="contact.groupId" v-if="groups.length>0" >
                            <option value="">Select Group</option>
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                        </select>

                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Edit">
                    </div>
                    

           


                </form>
                <img :src="contact.photo">
            </div>
        </div>
    </div>
</template>

<script>
import { Services } from '../services/service';


export default{
    data(){
        return{
            contactId:this.$route.params.Id,
            contact:{
                name:'',
                photo:'',
                email:'',
                mobile:'',
                title:'',
                company:'',
                groupId:'',


            },
            groups:[]
        }
    },

    created: async function(){
        try{
          
            let response1 = await Services.getAllGroups();
            this.groups = response1.data;
            let response = await Services.updateContact(this.contactId);
            this.contact = response.data;
            
            

        }
        catch(error){
            console.log(error);
        }

    },
    methods:{
        updateSubmit(){
            try{
                let response = Services.updateContact(this.contact,this.contactId);
                if(response){
                    return this.$router.push('/');
                }
                else{
                    return this.$router.push('/Add');

                }
            }
            catch(error){
                console.log(error);
            }

        }
    }
}
</script>