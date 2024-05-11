const clientes = require('../modelos/clientes')


const clientesHelper = {
    existeClientesID: async (id, req) => {
        const existe = await clientes.findById(id)
        if (!existe) {
            throw new Error(`Registro no existe ${id}`)
        }

        req.req.clientesobd = existe

    },

    existeEmail: async (email, req) => {
        if (email) {
            const existe = await clientes.findOne({ email })
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.email !== req.req.clientesbd.email)
                        throw new Error(`Ya existe ese email en la base de datos!!! ${email}`)

                } else {
                    throw new Error(`Ya existe ese email en la base de datos!!! ${email}`)
                }
            }
        }
    },

    verificarEmail: async (email, req) => {

        const existe = await clientes.findOne({ email });

        if (!existe) {
            throw new Error(`El email no está registrado`)
        }

        req.req.clientesbd = existe;

    },

}
module.exports= {clientesHelper}