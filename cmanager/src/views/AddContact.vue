<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Add Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
           
            <div class="col-md-3">
                <form>
                    <div class="mb-2">
                        <input type="text" v-model="contact.name" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.photo" class="form-control" placeholder="Photo URL" >
                        
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
                        <select class="form-control" v-model="contact.groupId" v-if="groups.length>0">
                            <option value="">Select Group</option>
                            <option :value="group.id" v-for="group of groups">{{ group.name }}</option>
                         </select>

                    </div>
                    <div class="mb-2">
                        <input type="submit" @click="submitCreate()" class="btn btn-success" value="Create">
                    </div>
                    

                    


                </form>
            </div>
            <img :src="contact.photo">
        </div>
    </div>
</template>

<script>
import { Services } from '../services/service';

export default {
    data(){
        return{
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
            let response = await Services.getAllGroups();
            this.groups = response.data;
        }
        catch(error){
            console.log(error);
        }



    },
    methods :{
        submitCreate(){
            try{
                let response = Services.createContact(this.contact);
                if(response){
                    return this.$router.push('/');
                }
                else{
                    return this.$router.push("/Add");

                }

            }
            catch(error){
                console.log(error);


            }
        }

    }

}
</script>

<style>
.col-md-3{
    width: 800px;
}
</style>