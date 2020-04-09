import {RequestHandler} from 'express';
/*instead of*/ // import {Request, Response, NextFunction} from 'express';
import {Item} from "../models/item";

const items:Item[] = [];
let id = 0;
const success = 201;

/// POST request to add an item
// export const insertItem = (request:Request, response:Response, next:NextFunction) => {
export const insertItem: RequestHandler =
    (request, response, next) => {
        let content = "";
        content = (request.body as { content: string }).content;
        id++;
        const newItem:Item = new Item(id.toString(), content);

        items.push(newItem);
        console.log(items);

        response.status(success).json({message: 'Item inserted successfully', insertedItem: newItem});
    }

/// GET request to retrieve all items
export const getItemList:RequestHandler =
    (request, response, nextFunction) => {
        response.json({items:items});
    };

/// GET request to retrieve an item provided an id
export const getItemId: RequestHandler<{id:string}> =
    (request, response, next) => {
        const localId = request.params.id;

        /// should not use {} in arrow function \todo review why
        const found = items.findIndex(item => item.id === localId);

        if(found < 0){
            throw new Error('Item at:' + localId +' not found: ' );
        }
        else {
            response.json(items[found]);
        }
    }

/// PUT request (or PATCH request) to update an item provided an id
export const updateItem: RequestHandler<{id:string}> =
    (request, response, nextFunction) => {
        const localId = request.params.id;
        const newText = (request.body as { text: string }).text;
        const index = items.findIndex((item) => item.id === localId );

        if (index < 0) {
            throw new Error('Item at:' + localId +' not found: ' );
        }

        items[index] = new Item(items[index].id, newText);

        response.json({message: 'Updated', item: items[index]});
    }

/// DELETE request to remove an item
export const removeItem: RequestHandler<{id:string}> =
    (request, response, next) => {
        const localId = request.params.id;

        const index = items.findIndex((item) => item.id === localId );

        if (index < 0) {
            throw new Error('Item at:' + localId +' not found: ' );
        }

        items.splice(index);
        response.json({message: 'Deleted item: ' + localId});
    }
