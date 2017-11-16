// Instancia de  mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Configurar un nuevo modelo moongoose and pass it using module.exports
var deviceNotificationSchema = new Schema({
    fcmToken:{
        type: String,
        unique: true,
        required: true
    },
    refDevice:{
        type: String,
        unique: true,
        required: true
    }
},
{
  collection: 'deviceNotificationModel'
});


  
module.exports = mongoose.model('DeviceNotification', deviceNotificationSchema);
