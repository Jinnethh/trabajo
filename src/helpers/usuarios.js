const Usuario=require('../models/usuarios')

const usuarioHelper = {
    existeUsuarioID: async (id, req) => {
        const existe = await Usuario.findById(id)
        if (!existe) {
            throw new Error(`Registro no existe ${id}`)
        }

        req.req.usuariobd = existe

    },

    existeEmail: async (email, req) => {
        if (email) {
            const existe = await Usuario.findOne({ email })
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.email !== req.req.usuariobd.email)
                        throw new Error(`Ya existe ese email en la base de datos!!! ${email}`)

                } else {
                    throw new Error(`Ya existe ese email en la base de datos!!! ${email}`)
                }
            }
        }
    },

    verificarEmail: async (email, req) => {

        const existe = await Usuario.findOne({ email });

        if (!existe) {
            throw new Error(`el email no esta registrado`)
        }

        req.req.usuariobd = existe;

    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await Usuario.findOne({ email })
            if (!user) {
                return res.status(401).json({
                    msg: "Usuario / Password no son correctos"
                })
            }
    
            if (user.estado === 0) {
                return res.status(401).json({
                    msg: "Usuario / Password no son correctos"
                })
            }
    
    
            const validPassword=bcryotjs.comparesync(password, user.password)
            if(!validPassword){
                return res.status(401).json({
                    msg:"usuario/ password no son correctos"
                })
            }
    
            const token = await generarJWT(user._id);
    
            res.json({
                usuario: user,
                token
            })
    
        } catch (error) {
    
            return res.status(500).json({
    
    
                msg: "Hable con el WebMaster"
            })
        }
    },
    usuarioPost: async (req, res) => {
          
        const { email, password } = req.body;
        const usuario = new Usuario({ email,password});

        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt)

        await usuario.save()

        res.json({
            usuario
        })
    },
}


module.exports= {usuarioHelper}





