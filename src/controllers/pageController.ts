import { Request, Response } from 'express';
import { createMenuObject } from './../helpers/createMenuObject';

export const home = ( req: Request, res: Response )=> {
   
   res.render('pages/page',{
       banner:{
           menu: createMenuObject('all'),
           title: 'Todos os animais',
            imgBackground: 'allanimals.jpg'
       }
   });
}

export const dogs = ( req: Request, res: Response )=> {

    res.render('pages/page',{
        menu: createMenuObject('dog'),
        banner:{
            title: 'Cachorros',
             imgBackground: 'banner_dog.jpg'
        }
    });
}

export const cats = ( req: Request, res: Response )=> {
    res.render('pages/page',{
        menu: createMenuObject('cat'),
        banner:{
            title: 'Gatos',
             imgBackground: 'banner_cat.jpg'
        }
    });
}

export const fishes = ( req: Request, res: Response )=> {
    res.render('pages/page',{
        menu: createMenuObject('fish'),
        banner:{
            title: 'Peixes',
             imgBackground: 'banner_fish.jpg'
        }
    });
}
