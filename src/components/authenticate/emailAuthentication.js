import axios from 'axios'

export const emailAuthentication = (email,callback) => {

    //get admin email
    let adminEmail = "";

    if(email === "")
        return callback(new Error('email field can not be empty'));

    else
    {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        if(!emailPattern.test(email)) 
        {
            return callback(new Error('enter a valid email address'))
        
        }
    }

    axios.get("https://run.mocky.io/v3/a704e123-2ac0-4976-b769-6e9adb8549c2")
    .then( response => {
        adminEmail = response.data.user.email;
        
        if(adminEmail === email)
        {
            return callback(null)
        }

        else {
            return callback( new Error(`Domain: ${email} not found.`))
        }
    })

    .catch( (error) => {
        return callback( new Error('unable to access database url'))
    })


    
}

export default emailAuthentication;