const xss = require('xss')

const AdminService = {
getAllProducts(db){
return db
 .from('products')
 .select('*')
},
addProduct(db, product){
    return db
    .insert(product)
    .into('products')
    .returning('*')
    .then(rows => {
        return rows[0]
    })
},
updateProduct(db, id, product){
return db('products')
    .where('id', id)
    .update(product)
},
deleteProduct(db, id){
    return db('products')
        .where('id', id)
        .delete()
},
getById(db , id){
    return db
    .from('products')
    .select('*')
    .where({id : id})
    .first()
}
}

module.exports = AdminService