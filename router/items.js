const express = require('express');

const router = express.Router();

let data = [
    {
        id: "_yhpydaa5d",
        name: "ajisyahroni",
        address: "sleman"
    },
    {
        id: "_wcxmn8y0o",
        name: "ikan fauzi",
        address: "bantul"
    },
    {
        id: "_y7cxacwl2",
        name: "ardianto",
        address: "mlati"
    }
];

router.get('/', (req,res) => {
    res.status(200).json(data);
});

router.get('/:id', (req,res) => {
    let found = data.find((item) => {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        res.status(200).json(found);
    } else {
        res.status(404);
    }
});

router.post('/', (req,res) => {
    let itemIds = data.map(item => item.id);

    // let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

    let newName = {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address
    }

    data.push(newName);

    res.status(201).json(newName);
});

router.put('/:id', (req,res) => {
    let found = data.find((item) => {
        return item.id === req.params.id
    });

    /* let oldId = data.find((item) => {
        return item.id
    }) */

    let oldName = data.find((item) => {
        return item.name
    })

    let oldAddres = data.find((item) => {
        return item.address
    })

    if (found) {
        let updateName = {
            id: found.id,
            name: req.body.name ? req.body.name : oldName.name,
            address: req.body.address ? req.body.address : oldAddres.address
        }
    
        let targetIndex = data.indexOf(found);
    
        data.splice(targetIndex, 1, updateName);
    
        res.status(200).json(updateName);
    } else {
        res.status(404);
    }
});

router.delete('/:id', (req,res) => {
    let found = data.find((item) => {
        return item.id === req.params.id;
    });

    if (found) {
        let targetIndex = data.indexOf(found);

        data.splice(targetIndex,1);

        res.send(`success to deleted id = ${found.id}`).status(204);
    };
});

module.exports = router;