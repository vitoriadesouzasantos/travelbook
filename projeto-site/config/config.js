module.exports = {
    production: {
        username: 'travelbook',
        password: '67268651Vitoria',
        database: 'TravelBook',
        host: 'travelbook.database.windows.net',
        dialect: 'mssql',
        xuse_env_variable: 'DATABASE_URL',
        dialectOptions: {
            options: {
                encrypt: true
            }
        },
        pool: {
            max: 5,
            min: 1,
            acquire: 5000,
            idle: 30000,
            connectTimeout: 5000
        }
    }
};