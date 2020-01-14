const { Client } = require('pg')
const client = new Client({
    user: 'nconbufpjeyueh',
    host: 'ec2-54-235-180-123.compute-1.amazonaws.com',
    database: 'd57d3mqrvc6gh5',
    password: '23227b481cb4db3f6798364292b9793bd6fa847757b35f283d6bd7af879f85ec',
    port: '5432',
    ssl: true
});

client.connect();

module.exports = client;

