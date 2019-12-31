exports.up = function(knex) {
    return knex.schema.createTable('ispindel', (table) => {
        table.increments('id')
        table.string('name')
        table.integer('ID')
        table.float('angle')
        table.float('temperature')
        table.string('temp_units')
        table.float('battery')
        table.float('gravity')
        table.integer('interval')
        table.integer('RSSI')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ispindel')
};
