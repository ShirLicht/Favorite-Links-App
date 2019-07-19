//service that handles all of the requests
import axios from 'axios';

const url = 'http://localhost:5000/';


class LinkService{

    //Get Links
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

    //Add Link
    static addLink(urlToAdd){
        return axios.post(url, {urlToAdd}).then(response => {
            if(response.status == '404')
                alert(response.statusText);
        });
    }


    //Delete Link
    static deleteLink(id){
        return axios.delete(`${url}${id}`);
    }
}

export default LinkService;