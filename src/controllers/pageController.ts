import { Request, Response } from 'express';
import { createMenuObject } from './../helpers/createMenuObject';
import { Pet} from '../models/pet';

export const home = ( req: Request, res: Response )=> {
   
    let list = Pet.getAll();

   res.render('pages/page',{
    menu: createMenuObject('all'),
       banner:{
           title: 'Todos os animais',
            imgBackground: 'allanimals.jpg'
       },
       list
   });
}

export const dogs = ( req: Request, res: Response )=> {
    let list = Pet.getFromType('dog');
    res.render('pages/page',{
        menu: createMenuObject('dog'),
        banner:{
            title: 'Cachorros',
             imgBackground: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = ( req: Request, res: Response )=> {
    let list = Pet.getFromType('cat');
    res.render('pages/page',{
        menu: createMenuObject('cat'),
        banner:{
            title: 'Gatos',
             imgBackground: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = ( req: Request, res: Response )=> {
    let list = Pet.getFromType('fish');
    res.render('pages/page',{
        menu: createMenuObject('fish'),
        banner:{
            title: 'Peixes',
             imgBackground: 'banner_fish.jpg'
        },
        list
    });
}
