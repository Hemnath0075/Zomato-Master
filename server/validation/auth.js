import joi from 'joi';

export const validateSignup=(userData)=>{
    const Schema= joi.object({
        fullname: joi.string().required().min(5).max(20),
        email: joi.string().email().required(),
        password: joi.string().min(20).required(),
        phoneNumber: joi.number().min(10).max(10).required()

    })

    return Schema.validateAsync(userData);

}

export const validateSignin=(userData)=>{
    const Schema=joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
    })
    return Schema.validateAsync(userData)
}

