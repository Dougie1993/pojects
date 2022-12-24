module.exports = {
    port: process.env.PORT || 3001,
    db: { 
        database: process.env.DB_NAME || 'test-db',
        user: process.env.DB_USER || 'user',
        password: process.env.DB_PASSWORD || 'pass',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host:process.env.HOST || 'localhost',
            storage: './dev.sqlite'

        }
    }
}
