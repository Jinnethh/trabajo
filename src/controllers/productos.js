const Productos = require("../modelos/productos");


    // Listar todos los productos
    const httpProductos = {
        // Listar todos los productos
        getlistarTodo: async (req, res) => {
          try {
            res.json({ msg: "Lista de todos los productos" });
          } catch (error) {
            res.status(500).json({ error: "Error al obtener la lista de productos" });
          }
        },
      
        // Listar un producto por su ID
        getlistarPorId: async (req, res) => {
          const { id } = req.params;
          try {
            const producto = await Productos.findById(id);
            res.json({ msg: "Producto encontrado por ID", producto });
          } catch (error) {
            res.status(500).json({ error: "Error al obtener el producto por ID" });
          }
        },
      
        // Listar todos los productos por debajo del stock mínimo
        getlistarPorStockMinimo: async (req, res) => {
          try {
            res.json({ msg: "Lista de productos por debajo del stock mínimo" });
          } catch (error) {
            res.status(500).json({ error: "Error al obtener la lista de productos por debajo del stock mínimo" });
          }
        },
      
        // Listar todos los productos por encima del precio especificado
        getlistarPorPrecioSuperior: async (req, res) => {
          const { precio } = req.params;
          try {
            
            await Productos.updateMany({ precio: { $gt: precio } }, { activo: true });
            res.json({ msg: "Lista de productos por encima del precio especificado" });
          } catch (error) {
            res.status(500).json({ error: "Error al obtener la lista de productos por encima del precio especificado" });
          }
        },
      
        // Listar productos activos
        getlistarActivos: async (req, res) => {
          try {
            res.json({ msg: "Lista de productos activos" });
          } catch (error) {
            res.status(500).json({ error: "Error al obtener la lista de productos activos" });
          }
        },
      
        // Listar productos inactivos
        getlistarInactivos: async (req, res) => {
          try {
            res.json({ msg: "Lista de productos inactivos" });
          } catch (error) {
            res.status(500).json({ error: "Error al obtener la lista de productos inactivos" });
          }
        },
      
        // Insertar un nuevo producto
        postinsertarProducto: async (req, res) => {
          try {
            res.json({ msg: "Producto insertado correctamente" });
          } catch (error) {
            res.status(500).json({ error: "Error al insertar un nuevo producto" });
          }
        },
      
        // Modificar un producto
        putmodificarProducto: async (req, res) => {
          const { id } = req.params;
          try {
            await Productos.findByIdAndUpdate(id, req.body);
            res.json({ msg: "Producto modificado correctamente" });
          } catch (error) {
            res.status(500).json({ error: "Error al modificar el producto" });
          }
        },
      
        // Activar un producto
        putactivarProducto: async (req, res) => {
          const { id } = req.params;
          try {
            await Productos.findByIdAndUpdate(id, { activo: true });
            res.json({ msg: "Producto activado correctamente" });
          } catch (error) {
            res.status(500).json({ error: "Error al activar el producto" });
          }
        },
      
        // Desactivar un producto
        putdesactivarProducto: async (req, res) => {
          const { id } = req.params;
          try {
            await Productos.findByIdAndUpdate(id, { activo: false });
            res.json({ msg: "Producto desactivado correctamente" });
          } catch (error) {
            res.status(500).json({ error: "Error al desactivar el producto" });
          }
        }
      };
      
      module.exports = { httpProductos };
      
    