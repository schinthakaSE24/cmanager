<template>
    <div class="container1">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Contact Manager
                <RouterLink to="/Add" class="btn btn-success btn-sm"><i class="bi bi-file-plus"></i> new</RouterLink>
                </p>

                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, architecto aspernatur, quod neque beatae ducimus debitis sit vero ipsam rerum consequatur. Dolores omnis repudiandae voluptate nobis doloremque nemo distinctio labore.</p>
                <form>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Search Name">

                        </div>
                        <div class="col">
                            <input type="submit" class="btn btn-outline-dark"> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="container2" v-if="contacts.length>0">
        <div class="row">
            <div class="col-md-6">
                <div class="card my-2 list-group-item-success shadow-lg" v-for="contact of contacts" :key="contact">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <img :src="contact.photo" alt="image1" class="contact-img">

                            </div>

                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name:<span class="font-monospace">{{ contact.name }}</span></li>
                                    <li class="list-group-item">Email:<span class="font-monospace">{{ contact.email }}</span></li>
                                    <li class="list-group-item">Mobile:<span class="font-monospace">{{ contact.mobile }}</span></li>
                                </ul>

                            </div>
                            <div class="col-sm-1">
                                <RouterLink :to="`/View/${contact.id}`" class="btn btn-warning my-1
                                 "><i class="bi bi-eye-fill"></i></RouterLink>
                                 <RouterLink :to="`/Edit/${contact.id}`" class="btn btn-primary 
                                 "><i class="bi bi-pen-fill"></i></RouterLink>
                                 <button class="btn btn-danger" @click="deleteCon(contact.id)"><i class="bi bi-trash-fill"></i></button>
                                



                            </div>


                        </div>
                    </div>
                </div>

            </div>
            
        </div>



    </div>
</template>

<style>
.contact-img{
    width: 150px;
    border-radius: 50%;
}
</style>

<script>
import { Services } from '../services/service';


export default{
    data() {
    return{
       
        contacts:[],
        errorMessage:null

    }
},
created: async function(){
    try{
      
        let response = await Services.getAllContacts();
        this.contacts = response.data;
     

    }
    catch(error){
        this.errorMessage = error;
      

    }

},
methods :{
    deleteCon:async function(contactId){
        try{ 
            let response1 = Services.deleteContact(contactId);
            if(response1){
                 let response = Services.getAllContacts();
                 this.contacts = response.data;
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
.container2{
    margin-left: 20px;
}
.card-body{
    width: 800px;

}
.container1{
    height: 20px;
    width: fit-content;
}
</style>


