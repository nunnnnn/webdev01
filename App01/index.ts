import * as requests from 'axios';

requests.get ('https://api.exchangeratesapi.io/latest')
    .on('requests',res => {
        console.log(res):   
    });


