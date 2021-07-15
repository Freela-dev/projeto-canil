import { Request, Response } from 'express';

export const home = ( req: Request, res: Response )=> {
   
   res.render('pages/page',{
       banner:{
           title: 'Todos os animais',
            imgBackground: 'allanimals.jpg'
       }
   });
}

export const dogs = ( req: Request, res: Response )=> {

    res.render('pages/page',{
        banner:{
            title: 'Cachorros',
             imgBackground: 'banner_dog.jpg'
        }
    });
}

export const cats = ( req: Request, res: Response )=> {
    res.render('pages/page',{
        banner:{
            title: 'Gatos',
             imgBackground: 'banner_cat.jpg'
        }
    });
}

export const fishes = ( req: Request, res: Response )=> {
    res.render('pages/page',{
        banner:{
            title: 'Peixes',
             imgBackground: 'banner_fish.jpg'
        }
    });
}
