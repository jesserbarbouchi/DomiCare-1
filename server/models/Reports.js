
var mongoose = require("mongoose");
var ReportsSchema=mongoose.Schema(
    {
        reporterId : {
         type: Schema.Types.ObjectId, refPath: 'onModel',
         required: true,
        },
        reportedId : {
            type: Schema.Types.ObjectId, refPath: 'onModel',
            required: true,
        },
        onModel: {
            type: String,
            required: true,
            enum: ['ServiceSeeker', 'ServiceProvider']
          },
        reason : {
        type: String,
        required: true,
        },
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now(),
          },
    }
)
const Reports = mongoose.model("Reports", ReportsSchema);
module.exports =  Reports;