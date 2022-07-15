const users = [
    {
        rut: '19571602-1',
        name: 'cuajito',
        password: '123456',
        type: 'admin'
    }
]

const registros = [
    {
        medicion: '100',
        unidad_de_medida: 'ML',
        fecha_creacion: '2020-01-01'
    }
]

const resolvers = {
    Query: {
        obtenerUsuarios: () => users,
        obtenerRegistros: () => registros
    },
    Mutation: {
        crearUsuario: (_, {input}) => {
            console.log(input)
            return "creando.."
        }
    } 
}

module.exports = resolvers;