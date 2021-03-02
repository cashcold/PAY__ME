const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_Name: {
        type: String,
        require: true,
    },
    user_Name: {
        type: String,
        require: true,
    },
    planNow: {
        type: String,
        require: true,
    },
    depositAmount: {
        type: String,
        require: true,
    },
  
    walletAddress: {
        type: String,
        require: true,
    },
  
    date:{
        type: String,
        require: true,
    }
      // bitcoin: {
    //     type: String,
    // },
    // bitcoinCash: {
    //     type: String,
    // },
    // ethereum: {
    //     type: String,
    // }
    // ,
    
})

const UserDeposit = mongoose.model('UserDeposit', userSchema)

module.exports = UserDeposit;