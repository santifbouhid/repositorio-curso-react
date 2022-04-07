let promesa = true;

const customFetch = (time, task) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(promesa) {
                resolve(task);
            } else {
                reject(alert('Error'));
            }
        }, time);
    })
};

export default customFetch;