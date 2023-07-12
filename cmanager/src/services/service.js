import axios from "axios";

export class Services{
    static serverURL = "http://localhost:3000/";

    static getAllContacts(){
      
        return axios.get(`http://localhost:3000/contacts`);
    } 
    static getContact(contactId){
        let dataURL = `http://localhost:3000/contacts/${contactId}`;
        return axios.get(dataURL);
    } 
    static createContact(contact){
        let dataURL = `http://localhost:3000/contacts/`;
        return axios.post(dataURL,contact);
    } 

    static updateContact(contact,contactId){
        let dataURL = `http://localhost:3000/contacts/${contactId}`;
        return axios.put(dataURL,contact);
    } 
    static deleteContact(contactId){
        let dataURL = `http://localhost:3000/contacts/${contactId}`;
        return axios.delete(dataURL);
    } 
    static getAllGroups(){
        let dataURL = `http://localhost:3000/groups/`;
        return axios.get(dataURL);
    } 
    static getGroup(contact){
        let groupId = contact.groupId
        let dataURL = `http://localhost:3000/groups/${groupId}`;
        return axios.get(dataURL);
    } 
}