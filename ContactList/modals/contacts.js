const mongoose =require("mongoose")
const { Schema } = mongoose;

const contactSchema=new Schema({
    name:{
            type:String,
            require:true
    },
    phone:{
        type:String,
        require:true
}
})

const Contact=mongoose.model("Contact",contactSchema);

module.exports=Contact