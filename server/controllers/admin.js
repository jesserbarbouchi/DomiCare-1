const adminLogin = require("../models/Admins.js");
const bcrypt = require("bcrypt");
const Posts = require("../models/Posts.js")



module.exports = {

    login: function (req, res) {
        adminLogin.create({ email: req.body.email,password:req.body.password }, (err, user) => {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err) res.json({ message: 'password incorrect' })
                res.status(200).send(isMatch)
            })
        })
    },
    get_all_posts: async(req,res) => {
        try {
           const posts = await Posts.find({})
            res.send(posts)
        
    }
    catch (err) {
        res.send(err);
    }
        
    },
    delete_post: async (req, res) => {
        const  postId  = req.params._id
        console.log(postId)


        try {
            const data = await Posts.deleteOne({_id:postId}).
            res.send(data)
            
        }
        catch (error) { console.log('err', error) }
        



        
    }




    
}