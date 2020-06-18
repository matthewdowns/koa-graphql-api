const faker = require('faker');
const fs = require('fs');

function generateData() {
    let users = [];
    for (var id = 1; id < 1000; id++) {
        users.push({
            id,
            email: faker.internet.email(),
            name: faker.name.findName(),
            username: faker.internet.userName()
        });
    }
    
    return {
        users
    }
}

const data = generateData();

fs.writeFileSync('faker/users.json', JSON.stringify(data, null, '\t'));