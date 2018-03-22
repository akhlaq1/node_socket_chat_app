'use strict'

module.exports = function(_){
    return {
        SetRouting:function(router){
            router.get('/',this.indexPage)
        },
        indexPage:function(req,res){
            res.render('index',{test:'<h1>this is a test</h1>'})

            }

        }
    }
}