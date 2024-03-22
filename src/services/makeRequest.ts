

import axios from 'axios';

export function makeAxiosRequest(setFormValue:any) {
    axios.get('https://quantcats-bfc2a3b9cfdf.herokuapp.com/bag')
        .then(response => {
            setFormValue(response.data.cats)
        })
        .catch(error => {
            console.log(error);
        }).finally(() => {
            console.log('finsihed');
        });
}

