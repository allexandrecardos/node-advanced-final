//controller.js

class Controller {

    async isBodyValid(body){
        if(Object.keys(body).length === 0){
            throw new Error('Body request empty!');
        }
        return body;
    }

}

module.exports = Controller;
