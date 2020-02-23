const bcrypt = require('bcrypt');

class Hash {
    
    get(data) {
        return bcrypt.hashSync(data, 10)
    }

    async compare(data, hash) {
        return await bcrypt.compare(data, hash)
    }
}

module.exports = new Hash();