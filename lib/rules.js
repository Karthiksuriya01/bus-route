import * as z from "zod"
const RegisterFormSchema =  z.object({
    number: z.string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits")
    .regex(/^\d+$/, "Must contain only numbers"),    
    password : z.string().min(6),
    confirmPassword: z.string().min(6)
}).superRefine((val,ctx) => {
    if(val.password !== val.confirmPassword){
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passwords do not match",
            path: ["confirmPassword"]
        })
    }
})
  
const LoginFormSchema =  z.object({
    number: z.string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits")
    .regex(/^\d+$/, "Must contain only numbers"),    
    password : z.string().min(6),
})

export { RegisterFormSchema, LoginFormSchema };
