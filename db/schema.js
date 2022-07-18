const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        rut: String,
        name: String,
        password: String,
        type: String
    },
    input UsuarioInput {
        rut: String!,
        name: String!,
        password: String!,
        type: String!,
    },
    input AutenticarInput {
        rut: String!,
        password: String!,
    },
    input RegistroInput {
        medicion: Float,
        unidad_de_medida: String,
        fecha_creacion: String,
        User: ID
    },
    type Token {
        token: String
    },
    type Registro {
        medicion: Float,
        unidad_de_medida: String
        fecha_creacion: String
        User: ID
    },
    type Query {
        obtenerUsuarios: [User]
        obtenerRegistros: [Registro]
    },
    type Query {
        obtenerUser(token: String!): User
        obtenerUser_ByRut(rut: String!): User
        obtenerRegistros_ByUserID(ID: ID!): [Registro]
    },
    type Mutation {
        crearUsuario(input: UsuarioInput): User
        autenticarUsuario(input: AutenticarInput): Token
        crearRegistro(input: RegistroInput): Registro

    }

    `;

module.exports = typeDefs;