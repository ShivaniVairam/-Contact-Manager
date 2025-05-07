import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContactService from './ContactService';
function Contacts() {
    // const url = "http://localhost:3000/contacts";
    // const navigate = useNavigate();
    // // hook
    // const [contacts, setContacts] = useState([]);
    // const setContactsData = () => { 
    //     ContactService.getAll(url)

    //         .then((response) => {
    //             console.log(response)
               
    //             setContacts(response.data);
    //         }).catch(error => {
    //             alert("Error Ocurred while loading data:" + error);
    //         });
    // }

    // useEffect(() => {
    //     setContactsData();
    // }, []);


    // const removeContact = (id) => {
    //     ContactService.delete(id)

    //         .then((response) => {
    //             alert("Name is deleted!");
    //             navigate("/list");
    //             window.location.reload();
    //         }).catch(error => {
    //             alert("Error Ocurred while loading data:" + error);
    //         });
        
       
    // }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>


                </tr>
            </thead>
            <tbody>

                {
                    contacts.map((contact, index) => (

                        <tr>
                            <td>
                                {contact.id}
                            </td>
                            <td>
                                {contact.name}
                            </td>
                            <td>
                                {contact.email}
                            </td>
                            <td>
                                <FaEdit />
                            <button onClick={() => removeContact(contact.id)}>  <FaTrash /></button>

                          
                            
                            </td>
                        </tr>
                    ))
                }



            </tbody>
        </Table>

    );

}
export default Contacts;