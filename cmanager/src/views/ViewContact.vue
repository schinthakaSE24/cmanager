<template>
  <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold"> Contact details</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, recusandae. Vel odit debitis expedita, provident officia ex molestiae reprehenderit molestias cum quasi vero vitae a consequatur fugit placeat repudiandae commodi.</p>

            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <img src="https://cdn-icons-png.flaticon.com/512/527/527489.png?w=740&t=st=1689133122~exp=1689133722~hmac=23573be3ecc5d3e7631eb6b6fcc2f22a52a61cf3417544d4f55fea362a0be6f2">

            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Name:<span class="font-monospace">{{ vcontact.name }}</span></li>
                    <li class="list-group-item">Email:<span class="font-monospace">{{ vcontact.email }}</span></li>
                    <li class="list-group-item">Mobile:<span class="font-monospace">{{ vcontact.mobile }}</span></li>
                    <li class="list-group-item">Company:<span class="font-monospace">{{ vcontact.company }}</span></li>
                    <li class="list-group-item">Title:<span class="font-monospace">{{ vcontact.title }}</span></li>
                    <li class="list-group-item">Group:<span class="font-monospace">{{ group.id }}</span></li>
                </ul>

            </div>
           
        </div>
        <div class="row">
            <div class="col">
                <RouterLink to="/" class="btn btn-success"><i class="bi bi-arrow-left-circle-fill"></i>Back</RouterLink>
            </div>
            
        </div>
    </div>

</template>
<style>
img{
   width: 150px; 
}
</style>

<script>
import { Services } from '../services/service';

export default{
    data(){
        return{
            contactId : this.$route.params.Id,
            vcontact:{},
            group:{}


        }
    },
    created: async function(){
        try{
            let response = await Services.getContact(this.contactId);
            let gresponse = await Services.getGroup(response.data)
            this.vcontact = response.data;
            this.group = gresponse.data;

        }
      catch(error){
        console.log(error);

      }
    }
}

</script>