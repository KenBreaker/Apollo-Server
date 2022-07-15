const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        rut: String
        name: String
        password: String
        type: String
    },
    input UsuarioInput {
        rut: String
        name: String
        password: String
        type: String
    },
    type Registro {
        medicion: Float
        unidad_de_medida: String
        fecha_creacion: String
    },
    type Query {
        obtenerUsuarios: [User]
        obtenerRegistros: [Registro]
    },
    type Mutation {
        crearUsuario(input: UsuarioInput): String
    }
    `;

module.exports = typeDefs;