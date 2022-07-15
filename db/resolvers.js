const User = require('../models/User');

const resolvers = {
    Query: {
        obtenerUsuarios: () => users,
        obtenerRegistros: () => registros
    },
    Mutation: {
        crearUsuario: async (_, {input}) => {
            const { rut,name,password,type } = input;
            const existeUsuario = await User.findOne({ rut });
            if (existeUsuario) {
                throw new Error('El usuario ya existe');
            }
            try {
                let usuario = new User({ rut: rut, name: name, password: password, type: type });
                usuario.save();
                return usuario
            } catch (error) {
                throw new Error(error);
            }
        }
    } 
}

module.exports = resolvers;