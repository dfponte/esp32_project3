const router = require('express').Router();

const Portfolio = require('../models/portfolio');


// Create 
router.post('/', async (req,res)=>{

    const portfolio = new Portfolio({
    title:req.body.title,
    description:req.body.description

    });

    try {
        const savePortfolio = await portfolio.save();
        res.json({
            success:true,
            data:savePortfolio
        });
        
    } catch (err) {
        res.json({
            success: false,
            messagem: err
            });
    }

    
    /*portfolio
    .save()
    .then((data)=>{
        res.json(
            {
            success:true,
            data:data
            }

        );
    })
    .catch((err)=>{
            res.json({
            success: false,
            messagem: err
            });

    })*/

});

//Read

router.get('/', async (req,res)=>{

    const portfolio = await Portfolio.find();

     try {
              res.json({
         "success":true,
         "data":portfolio
    });
        
    } catch (err) {
        res.json({
            success: false,
            messagem: err
            });
    }

});


router.get('/:slug', async (req,res)=>{

   
     try {
           const portfolio = await Portfolio.findOne({
           slug: req.params.slug
          } );

              res.json({
         "success":true,
         "data":portfolio
    });
        
    } catch (err) {
        res.json({
            success: false,
            messagem: err
            });
    }

});

//Update

router.patch('/:slug', async (req,res)=>{



     try {
           const updatePortfolio = await Portfolio.updateOne({
          slug:req.params.slug
          },
          {
    
            title:req.body.title,
            description:req.body.description

        }
      );
         res.json({
         "success":true,
         updated:updatePortfolio.modifiedCount
         });
        
    } catch (err) {
        res.json({
            success: false,
            messagem: err
            });
    }

});

//Delete

router.delete('/:slug', async (req,res)=>{


     try {
           const deletePortfolio = await Portfolio.deleteOne({
           slug:req.params.slug
           });

         res.json({
         "success":true,
          "deleted":deletePortfolio.deletedCount
         })
         } catch (err) {
        res.json({
            success: false,
            messagem: err
            });
    }

});

module.exports = router;