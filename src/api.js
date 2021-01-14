let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async function (){
        const res = await fetch(BASE+'/categories');
        const json = await res.json();
        
        return json;
    },
        
    getProducts: async () => {
        const res = await fetch(BASE+'/products');
        const json = await res.json();
        return json
    }
};