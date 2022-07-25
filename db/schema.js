const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID,
        rut: String,
        name: String,
        password: String,
        type: String,
        average: Float,
    },
    input UsuarioInput {
        rut: String!,
        name: String,
        password: String,
        type: String,
        average: Float
        
    },
    input AutenticarInput {
        rut: String!,
        password: String!,
    },
    input RegistroInput {
        medicion: Float,
        unidad_de_medida: String,
        fecha_creacion: String,
        user: String
    },
    type Token {
        token: String
    },
    type Registro {
        medicion: Float,
        unidad_de_medida: String
        fecha_creacion: String
        user: String
    },
    type Query {
        obtenerUsuarios: [User]
        obtenerRegistros: [Registro]
    },
    type Query {
        obtenerUser(token: String!): User
        obtenerUser_ByRut(rut: String!): User
        obtenerRegistros_ByUserRut(Rut: String!): [Registro]
        obtenerUsers: [User]
    },
    type Mutation {
        crearUsuario(input: UsuarioInput): User
        autenticarUsuario(input: AutenticarInput): Token
        crearRegistro(input: RegistroInput): Registro
        actualizarUsuario(input: UsuarioInput): User
    }

    `;

module.exports = typeDefs;