const Ventas = require("../modelos/ventas");

const httpVentas = {
  // Listar todas las ventas
  getlistarTodo: async (req, res) => {
    try {
    
      res.json({ msg: "Lista de todas las ventas" });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la lista de ventas" });
    }
  },

  // Listar una venta por su ID
  getlistarPorId: async (req, res) => {
    const { id } = req.params;
    try {
   
      const venta = await Ventas.findById(id);
      res.json({ msg: "Venta encontrada por ID", venta });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la venta por ID" });
    }
  },

  // Listar ventas activas
  getlistarActivos: async (req, res) => {
    try {

      res.json({ msg: "Lista de ventas activas" });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la lista de ventas activas" });
    }
  },

  // Listar ventas inactivas
  getlistarInactivos: async (req, res) => {
    try {

      res.json({ msg: "Lista de ventas inactivas" });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la lista de ventas inactivas" });
    }
  },

  // Listar ventas del cliente especificado
  getlistarVentasCliente: async (req, res) => {
    const { clienteId } = req.params;
    try {
   
      res.json({ msg: `Lista de ventas del cliente ${clienteId}` });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las ventas del cliente" });
    }
  },

  // Listar todas las ventas entre dos fechas
  getlistarVentasEntreFechas: async (req, res) => {
    const { fechaInicio, fechaFin } = req.params;
    try {
   
      const ventas = await Ventas.find({ fecha: { $gte: fechaInicio, $lte: fechaFin } });
      res.json({ msg: "Lista de ventas entre las fechas especificadas", ventas });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las ventas entre las fechas especificadas" });
    }
  },

  // Listar ventas 
  getlistarVentasSuperiorValor: async (req, res) => {
    const { valor } = req.params;
    try {

      const ventas = await Ventas.find({ valor: { $gt: valor } });
      res.json({ msg: "Lista de ventas con valor superior al especificado", ventas });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las ventas con valor superior al especificado" });
    }
  },

  // Insertar una nueva venta
  postinsertarVenta: async (req, res) => {
    try {
   
      res.json({ msg: "Venta insertada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al insertar una nueva venta" });
    }
  },

  // Modificar una venta
  putmodificarVenta: async (req, res) => {
    const { id } = req.params;
    try {
  
      await Ventas.findByIdAndUpdate(id, req.body);
      res.json({ msg: "Venta modificada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al modificar la venta" });
    }
  },

  // Activar una venta
  putactivarVenta: async (req, res) => {
    const { id } = req.params;
    try {
    
      await Ventas.findByIdAndUpdate(id, { activo: true });
      res.json({ msg: "Venta activada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al activar la venta" });
    }
  },

  // Desactivar una venta
  putdesactivarVenta: async (req, res) => {
    const { id } = req.params;
    try {
      await Ventas.findByIdAndUpdate(id, { activo: false });
      res.json({ msg: "Venta desactivada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al desactivar la venta" });
    }
  }
};

module.exports = { httpVentas };
