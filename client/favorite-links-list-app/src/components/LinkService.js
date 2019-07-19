//service that handles all of the requests
import axios from 'axios';

//server's url
const url = 'http://localhost:5000/';


class LinkService{

    //Get All Links
    static getLinks(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(link => ({...link}))
                );
            }catch(err){
                reject(err);
            }
        });
    }

    //Add a Link
    static addLink(urlToAdd){
        return axios.post(url, {urlToAdd});
    }


    //Delete a Link - with the supplied id
    static deleteLink(id){
        return axios.delete(`${url}${id}`);
    }
}

export default LinkService;