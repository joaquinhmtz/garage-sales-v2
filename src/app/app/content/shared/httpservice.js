const api = "https://garage-sales-v2-api.vercel.app";

export async function post (url, data) {
    return new Promise(async (resolve, reject) => {
        try {
            const form_values = Object.fromEntries(data);
    
            await fetch(`${api}${url}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form_values)
                },{ cache: 'no-store' }
            )
            .then((res) => {  
                res = res.json();
                resolve(res);
            })
            .then((error) => {  
                reject(error)
            })
    
        } catch (e) {
            console.log("Error**", e);
        }
    });
}

export async function get (url, data) {
    return new Promise(async (resolve, reject) => {
        try {
            //const form_values = Object.fromEntries(data);
    
            await fetch(`${api}${url}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                //params: JSON.stringify(form_values)
                },{ cache: 'no-store' }
            )
            .then((res) => {  
                res = res.json();
                resolve(res);
            })
            .then((error) => {  
                reject(error)
            })
    
        } catch (e) {
            console.log("Error**", e);
        }
    });
}

export async function postNotForm (url, data) {
    return new Promise(async (resolve, reject) => {
        try {
            await fetch(`${api}${url}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                },{ cache: 'no-store' }
            )
            .then((res) => {  
                res = res.json();
                resolve(res);
            })
            .then((error) => {  
                reject(error)
            })
    
        } catch (e) {
            console.log("Error**", e);
        }
    });
}
