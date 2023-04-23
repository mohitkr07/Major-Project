const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({

    studentId : {
        type: String,
    },
    quizId: {
        type: String,
    },
    response: [
        {
            questionId:{
                type: String
            },
            option:{
                type: String
            }
        }
    ]
    
})


const responseObj = mongoose.model('responses',responseSchema)

module.exports = responseObj;
