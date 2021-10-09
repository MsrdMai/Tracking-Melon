
const validation = (values) => {

    let errors={};

    if(!values.username){
        errors.username="Username is required"
    }
    if(!values.email){
        errors.email="Email is required"
    }
    if(!values.password){
        errors.password="Password is required"
    }
        else if (values.password.lenght < 8){
            errors.password="Password must be more than eight characters"
        }

    if(!values.phone){
            errors.phone="Phone is required"
        }
    else if (values.phone.lenght < 10 || values.phone.lenght > 10){
        errors.phone="Phone must be than ten characters"
    }

    return errors;

}
export default validation;