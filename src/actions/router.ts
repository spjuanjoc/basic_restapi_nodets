import {Router} from "express";
import {insertItem, getItemList, getItemId, updateItem, removeItem} from "../controllers/items";

const router = Router();

/// Requests must be in JSON format
// Verbs
router.post('/', insertItem);
router.get('/', getItemList);
router.get('/:id', getItemId);
router.patch('/:id', updateItem);
router.put('/:id', updateItem);
router.delete('/:id', removeItem);

export default router;
