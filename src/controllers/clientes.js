const Clientes = require("../modelos/clientes");

// Listar todos los clientes
const httpClientes = {
    getClientes: async (req, res) => {
        try {
            const clientes = await Clientes.find();
            res.json({ clientes });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    // Listar un solo Clientes por su ID
    getCleinteXId: async (req, res) => {
        const { id } = req.params;
        try {
            const Clientes = await Clientes.findById(id);
            if (Clientes) {
                res.json({ Clientes });
            } else {
            }
            res.status(400).json({ msg: "Cleinte no encontrado" });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    // Listar Clientes activos
    getUsuariosActivos: async (req, res) => {
        const { estado } = req.params;
        try {
            const clientesActivos = await Clientes.find({ activo: estado });
            res.json({ clientesActivos });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    // Listar Clientes inactivos
    getClientesInactivos: async (req, res) => {
        try {
            const clientesInactivos = await Clientes.find({ activo: false });
            res.json({ clientesInactivos });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    // Insertar Cleinte (post)
    postinsertarCliente: async (req, res) => {
        try {
            const { nombre, direccion, telefono, email, documento, estado } = req.body;
            const nuevoCliente = new Clientes({ nombre, direccion, telefono, email, documento, estado });
            await nuevoCliente.save();
            res.json({ msg: "Cliente creado correctamente" });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
        // Modificar Cliente (POST)
        postModificarCliente: async (req, res) => {
            const { id } = req.params;
            const { nombre, direccion, telefono, email, documento, estado } = req.body;
            try {
                const clienteModificado = await Clientes.findByIdAndUpdate(id, { nombre, direccion, telefono, email, documento, estado }, { new: true });
                if (!clienteModificado) {
                    return res.status(404).json({ msg: "cliente no encontrado " });
                }
                res.json({ msg: "cliente modificado correctamente ", clientes: clienteModificado });
            } catch (error) {
                res.status(400).json({ error })
            }
        },
    
        // Activar Cliente (PUT)
        putActivarCliente: async (req, res) => {
            const { id } = req.params;
            try {
                const clienteActivado = await Clientes.findByIdAndUpdate(id, { activo: true }, { new: true });
                if (!clienteActivado) {
                    return res.status(404).json({ msg: "cliente no encontrado" });
                }
                res.json({ msg: "clientes activado correctamente", clientes: clienteActivado });
            } catch (error) {
                res.status(400).json({ error });
            }
        },
    // Desactivar cliente
    putdesactivarCliente: async (req, res) => {
        const { id } = req.params;
        try {
            await Clientes.findByIdAndUpdate(id, { activo: false });
            res.json({ msg: "clientes desactivado correctamente "});
        } catch (error) {
            res.status(400).json({ error });
        }
    },
};

module.exports = {httpClientes};
