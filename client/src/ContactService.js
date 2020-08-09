import axios from "axios";
import jwtDecode from "jwt-decode";

const url = "/api/contacts/";

class ContactService {

    static getContacts() {
        return new Promise((resolve, reject) => {
            const decoded = jwtDecode(localStorage.token);
            var username = decoded.email;
            var utcSeconds = decoded.exp;
            var time = new Date(0);
            time.setUTCSeconds(utcSeconds);
            if (time >= new Date()) {
                axios.get(url + username).then((res) => {
                        const data = res.data;
                        resolve(
                            data.map(contact => ({
                                ...contact
                            }))
                        );
                    })
                    .catch((err) => {
                        reject(err);
                    })
            } else {
                return alert("Login session has expired. Please click on `logout` and then log in again.")
            }
        });
    }

    static editContact(id) {
        return new Promise((resolve, reject) => {
            const decoded = jwtDecode(localStorage.token);
            var utcSeconds = decoded.exp;
            var time = new Date(0);
            time.setUTCSeconds(utcSeconds);
            if (time >= new Date()) {
                axios.get(url + id + "/edit").then((res) => {
                        const data = res.data;
                        //console.log(data)
                        resolve(
                            data.map(contact => ({
                                ...contact
                            }))
                        );
                    })
                    .catch((err) => {
                        reject(err);
                    })
            } else {
                return alert("Login session has expired. Please click on `logout` and then log in again.")
            }
        });
    }

    static deleteContact(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default ContactService;