import * as express from 'express';
import Database from './database';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('Rahman');
});

router.get('/api/drugs', async(req, res) => {
    try {
        let drugs = await Database.Drugs.listAllDrugs();
        res.json(drugs);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

// router.use('/static', express.static(path.join(__dirname, 'public')))

export default router;