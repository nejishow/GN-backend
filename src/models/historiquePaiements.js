const mongoose = require('mongoose')
const historicPSchema = new mongoose.Schema({
    boiteNumber: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    idBoite: {
        type: mongoose.Schema.Types.ObjectId,
        //required: true
    },
    priceBoite: {
      type:Number  
    },
    idClient: {
        type: mongoose.Schema.Types.ObjectId,
        //required: true
    },
    idPaiement: {
        type: mongoose.Schema.Types.ObjectId,
        //required: true
    },
    forfaits: [{
        idForfait: {
            type: mongoose.Schema.Types.ObjectId,
            //required: true
        },
        price: {
            type: Number,
            //required: true
        },
    }],
    staffs: [{
        idStaff: {
            type: mongoose.Schema.Types.ObjectId,
            //required: true
        },
    }],
    enabled: {
        type: Boolean,
        default: true
    },
    toModify: {
        type: Boolean,
        default: true
    },
    toDelete: {
        type: Boolean,
        default: true
    },
    date: {
        type: Number,
        //required: true
    },
    total: {
        type: Number,
        //required: true
    },

},
    { timestamps: true })


const HistoricP = mongoose.model('historicPs', historicPSchema)

module.exports = HistoricP