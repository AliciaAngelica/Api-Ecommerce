const Produto = require('../Models/Produto')


module.exports = {
    async create(req, res) {

        const { productName, price, promotionPrice, stock, visible, description } = req.body

        try {

            const createdDataProduto = await Produto.create({
                productName,
                price,
                promotionPrice,
                stock,
                visible,
                description
            })
            return res.status(201).send(createdDataProduto)

        } catch (err) {
            return res.status(400).send(err)
        }
    },
}


exports.update = (req, res)=>{

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : "Não foi possível atualizar o produto"})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            return res.status(400).send(err)
        })
}


exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : "Não foi possível deletar o produto"})
            }else{
                res.send({
                    message : "Produto deletado com sucesso!"
                })
            }
        })
        .catch(err =>{
            return res.status(400).send(err)
        });
}